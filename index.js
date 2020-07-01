//connect server module
/*let server = require('./server');

server.start();*/

//connect router module
let server = require('./server');
let router = require('./router')
server.start(router.route);