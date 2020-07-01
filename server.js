/*let http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8000);*/


/*let http = require('http');

function onRequest (request, response){
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8000);*/

/*let http = require('http');

function onRequest (request, response){
    console.log("Request recieved!")
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8000);

console.log("Server has started")*/

//Wednesday
//defination shd be done for http and url
let http = require('http');
let url = require('url')
//A function to wrap our server functionality so that we can export it
let start = function (route, handle) {

    function onRequest(request, response) {
        //Extracting the pathname from the url requested
        let pathname = url.parse(request.url).pathname
        console.log("Request for " + pathname + " has been received.")
        
        //pass handleobject to the route function
        route(handle, pathname);

        response.writeHead(200, { "Content-type": "text/plain" });
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8000);

    console.log("Server has started")
}
exports.start = start;


