var inquirer = require("inquirer");
var Letter = require("./Letter");
var Word = require("./Word");

var acceptedKeys = "abcdefghijklmnopqrstuvwxyz";
var guessesAllowed = 10;
var message;

function userInput() {
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

            currentLetter.guess(answers.guess);
            currentLetter.display();
            userInput();
        })
   
}

Word.pickWord;
userInput();