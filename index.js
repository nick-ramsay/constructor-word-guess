var inquirer = require("inquirer");
var Letter = require("./Letter");
var Word = require("./Word");

var acceptedKeys = "abcdefghijklmnopqrstuvwxyz";
var guessesAllowed = 10;
var currentUnguessedCount;
var winCount = 0;
var guessesRemaining;
var lossCount = 0;
var message;

var wordOptions = ["earth", "mars"];

function newGame() {
    currentUnguessedCount = 1;
    guessesRemaining = 10;
    var randomPick = Math.floor(Math.random() * wordOptions.length);
    var randomWord = wordOptions[randomPick];
    var newWord = new Word(randomWord, []);
    newWord.parseLetters();
    newWord.guessString();
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
                currentUnguessedCount = 0;
                for (i = 0; i < newWord.letters.length; i++) {
                    switch (newWord.letters[i].letter) {
                        case (answers.guess):
                            newWord.letters[i].guess(answers.guess);
                            break;
                    }; //Marks letters.guessed as true when correctly guessed
                    switch (newWord.letters[i].guessed) {
                        case false:
                            currentUnguessedCount++;
                    };
                };
                newWord.guessString();
                switch (currentUnguessedCount) {
                    case 0:
                        winCount++;
                        console.log("Congrats! You've won!\nSo far, you've won " + winCount + " games!\n----------------------------\nHere's your next word!");
                        newGame();
                        break;
                    default:
                        userInput();
                };
            });

    };
    userInput();
}
console.log("Welcome! Here's your first word...")
newGame();