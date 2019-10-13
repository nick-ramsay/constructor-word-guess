var Letter = require("./Letter");

function Word(word,letters) {
    this.word = word;
    this.letters = letters;
    this.parseLetters = function () {
        for (i = 0; i < word.length; i++) {
            this.letters.push(new Letter(this.word[i],false));
        }
    }
    this.guessString = function () {
        for (i=0; this.word.length > i; i++) {
            console.log(this.word[i]);
        }
    };
    this.guessedLetter = function (guess) {
    };
}

module.exports = Word;