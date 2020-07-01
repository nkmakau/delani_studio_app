//connect server module
/*let server = require('./server');

server.start();*/

//connect router module
/*let server = require('./server');
let router = require('./router')
server.start(router.route);*/

//connect request handler module
let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandlers');

let handle = {};
handle["/"] = requestHandler.index;
handle["/index.html"] = requestHandler.index;
handle["/about.html"] = requestHandler.about;
handle["/portfolio.html"] = requestHandler.portfolio;

server.start(router.route, handle);