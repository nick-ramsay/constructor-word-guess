var inquirer = require("inquirer");
var Letter = require("./Letter");
var Word = require("./Word");

var acceptedKeys = "abcdefghijklmnopqrstuvwxyz";
var guessesAllowed = 10;
var message;

var wordOptions = ["earth", "mars"];

function newGame() {
    var randomPick = Math.floor(Math.random() * wordOptions.length);
    var randomWord = wordOptions[randomPick];
    var newWord = new Word(randomWord, []);
    newWord.parseLetters();
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
                for (i = 0; i < newWord.letters.length; i++) {
                    if (newWord.letters[i].letter == answers.guess) {
                        console.log(newWord.letters[i].letter == answers.guess);
                        console.log(newWord.letters[i]);
                        newWord.letters[i].guessed = true;
                        console.log(newWord.letters[i].guessed);
                    };
                }
                userInput();
            })

    };
    userInput();
}
newGame();