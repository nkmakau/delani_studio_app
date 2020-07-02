let fs = require('fs')

class logger {
    //Create a constructor for the logger class and pass in the name of the module that each log will belong to.
    constructor(module) {

        this module = module

        //create  write stream so that we'll be able to write the log messages into the log file 
        let logStream = fs.createWriteStream('./logs', {flags: 'a'})

        //create function that logs info level messages
        let info = function (msg) {
            //Define the log level
            var level = 'info'.toUpperCase()

            //Format the message into the desired format
            let message = '${new Date()} | ${level} | ${module} | ${msg} \n'

            //Write the formated message logged into the log file
            logStream.write(message)
        }
        //initialize the info function.
        this.info = info

        //Create a function  that logs error level messages
        let error = function(msg){
            //Define the log level
            var level = 'error'.toUpperCase()

            //format the message into the desired format
            let message = '${new Date()} | ${level} | ${module} | ${msg} \n'

            //Write the formated message logged into the log file
            logStream.write(message)
        }

        //initialize the error function
        this.error = error
    }
}

module.exports = logger