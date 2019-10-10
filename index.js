var inquirer = require("inquirer");
var Letter = require("./Letter");
var Word = require("./Word");

var acceptedKeys = "abcdefghijklmnopqrstuvwxyz";
var guessesAllowed = 10;
var message;

var wordOptions = [["e", "a", "r", "t", "h"],["m","a","r","s"]];
var newWord;

function pickWord() {
    var randomPick = Math.floor(Math.random() * wordOptions.length);
    newWord = new Word(wordOptions[randomPick]);
    for (i = 0; newWord.word.length > i; i++) {
        newLetter = new Letter(newWord.word[i], false);
        console.log(newLetter.letter);
        console.log("Pick word ran!");
    }
}

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
            console.log(newLetter);
            userInput();
        })
   
};

pickWord();

userInput();