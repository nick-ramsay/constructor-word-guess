var newLetter;

function Letter(letter,guessed) {
    this.letter = letter;
    this.guessed = guessed;
    this.display = function toString() {
        switch (this.guessed) {
            case true:
                console.log(this.letter);
                break;
            case false:
                console.log("_");
                break;
        };
    };
    this.guess = function guess(guess) {
        if (this.letter === guess) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
    };
}

module.exports = Letter;

/*var currentLetter = new Letter("a",false);

currentLetter.guess("a");
//currentLetter.guess("b");
console.log(currentLetter.guessed);
currentLetter.display();*/