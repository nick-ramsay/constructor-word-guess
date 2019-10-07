var inquirer = require("inquirer");
var acceptedKeys = "abcdefghijklmnopqrstuvwxyz";
var Letter = require("./Letter");

var guessesAllowed = 10;
var message;

inquirer
    .prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess a letter!",
            validate: function (input) {
                if (acceptedKeys.indexOf(input) !== -1 && input.length === 1) {
                    return true;
                } else {
                    console.log("\nNot a valid guess... Enter a single, lowercase letter");
                    return false;
                }
            }
        }
    ]).then(function (answers) {
        console.log("Then functions...");
        var currentLetter = new Letter(answers.guess, false);

        //currentLetter.guess("a");
        //currentLetter.guess("b");
        //console.log(currentLetter.guessed);
        currentLetter.display();

    })