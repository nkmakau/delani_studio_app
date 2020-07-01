//function for handling index.hmtl business logic
function index() {
    console.log("Request handler for index was called.")
}

//function for handling about.html business logic
function about() {
    console.log("Request handler for about was called.")
}

//function for handling portfolio.html business logic
function portfolio() {
    console.log("Request for handling portfolio was called.")
}

exports.index = index;
exports.about = about;
exports.portfolio = portfolio;