var inquirer = require("inquirer");
var acceptedKeys = "abcdefghijklmnopqrstuvwxyz";

var guessesAllowed = 10;
var message;

inquirer
    .prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess a letter!",
            validate: function(input) {
                if (acceptedKeys.indexOf(input) !== -1) {
                    return true;
                } else {
                    console.log("Not a valid guess... lowercase letters only");
                    return false;
                }
            }
        }

    ]).then(

    )