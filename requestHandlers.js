//function for handling index.hmtl business logic
function index() {
    console.log("Request handler for index was called.")
    return "Welcome to Delani Studio"
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