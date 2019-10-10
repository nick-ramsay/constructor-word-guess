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

module.exports = Word;