let path = require('path');
let fs = require('fs');

function route(handle, pathname, response) {
    console.log("About to route a request for" + pathname);
    //check if the request url is a function. since we mapped our expected request urls to a function in requerst handlers
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response)
    } else if (pathname.match("\.css$")) {
        let cssPath = path.join(__dirname, 'public', pathname);
        let cssStream = fs.createReadStream(cssPath);
        response.writeHead(200, { "Content-Type": "text/css" })
        cssStream.pipe(response);
    } else if (pathname.match('\.png$') || pathname.match('\.jpg$')) {
        let imagePath = path.join(__dirname, 'public', pathname);
        let imageStream = fs.createReadStream(imagePath);
        response.writeHead(200, { "Conte-Type": "text/png" });
        imageStream.pipe(response);
    } else if (pathname.match('\..js$')) {
        let jsPath = path.join(__dirname, 'public', pathname);
        let jsStream = fs.createReadStream(jsPath)
        response.writeHead(200, { "Content-Type": "text/js" })
        jsStream.pipe(response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;

