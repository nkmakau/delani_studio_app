let exec = require("child_process").exec;
//function for handling index.hmtl business logic
function index() {
    console.log("Request handler for index was called.")
    //function that will delay for 10 seconds before returning text.
    var content = "empty";

    exec("ls -lah", function(error, stdout, stderr) {
        content = stdout;
    })

    return content
}

//function for handling about.html business logic
function about() {
    console.log("Request handler for about was called.")
    return "Get to know all about us and what we do here at Delani Studio"
}

//function for handling portfolio.html business logic
function portfolio() {
    console.log("Request for handling portfolio was called.")
    return "These are some of our portfolio projects."
}

exports.index = index;
exports.about = about;
exports.portfolio = portfolio;