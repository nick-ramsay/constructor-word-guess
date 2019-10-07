var letter = require("./Letter");

function Word(word) {
    this.word = word;
    this.guessString = function () {
        this.word.forEach(function (){
            console.log("Test\n");
        })
    }
}

var word1 = new Word(["e","a","r","t","h"]);

console.log(word1.word.length);
word1.guessString();