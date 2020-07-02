let exec = require("child_process").exec;

//function for handling index.hmtl business logic
function index(response) {
    console.log("Request handler for index was called.")
   
    exec("ls -lah", function(error, stdout, stderr) {
       response.writeHead(200, {"Content-Type": "text/plain"});
       response.write(stdout);
       response.end();
    })
}

//function for handling about.html business logic
function about(response) {
    console.log("Request handler for about was called.")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write ("Get to know all about us and what we do here at Delani Studio");
    response.end();
}

//function for handling portfolio.html business logic
function portfolio(response) {
    console.log("Request for handling portfolio was called.")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write ("These are some of our portfolio projects.");
    response.end();
}

exports.index = index;
exports.about = about;
exports.portfolio = portfolio;