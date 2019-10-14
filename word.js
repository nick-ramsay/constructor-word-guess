var Letter = require("./Letter");

function Word(word,letters) {
    this.word = word;
    this.letters = letters;
    this.parseLetters = function () {
        for (i = 0; i < word.length; i++) {
            this.letters.push(new Letter(this.word[i],false,"_"));
        }
    }
    this.guessString = function () {
        var guessString = [];
        for (i=0; i < this.word.length; i++) {
            //console.log(this.letters[i].current);
            this.letters[i].display();
            guessString.push(this.letters[i].current);
        };
        console.log(guessString.toString().replace(/,/g," ") + "\n");
    };
    this.guessedLetter = function (guess) {
    };
}

module.exports = Word;