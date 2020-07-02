let fs = require("fs");
let Logger = require('./logger')
let logger = new Logger('Request Handler')

//function for handling index.hmtl business logic
function index(response) {
    logger.info("Request handler for index was called.")
    console.log("Request handler for index was called.")

    //Reading the index.html file and attaching the content to the response
    fs.readFile("./public/index.html", function (error, data) {
        if (error) {
            logger.info(err)
            console.log(err);
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
    })

}
    //function for handling about.html business logic
    function about(response) {
        logger.info("Request handler for about was called.")
        console.log("Request handler for about was called.")
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write ("Get to know all about us and what we do here at Delani Studio");
        response.end();
    }
    
    //function for handling portfolio.html business logic
    function portfolio(response) {
        logger.info("Request handler for about was called.")
        console.log("Request for handler portfolio was called.")
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write ("These are some of our portfolio projects.");
        response.end();
    }
   
    exports.index = index;
    exports.about = about;
    exports.portfolio = portfolio;