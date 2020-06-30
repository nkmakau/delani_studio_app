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

let http = require('http');

function onRequest (request, response){
    console.log("Request recieved!")
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8000);

console.log("Server has started")
