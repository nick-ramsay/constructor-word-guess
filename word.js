var Letter = require("./Letter");
console.log("Word.js triggered...");

function Word(word) {
    console.log("Word ran!");
    this.word = word;
    this.guessString = function () {
        for (i=0; this.word.length > i; i++) {
            console.log(this.word[i]);
            //newLetter.display();
            //console.log("guessString ran!");
        }
    };
    this.guessedLetter = function (guess) {
    };
}

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

module.exports = Word;
module.exports = pickWord;