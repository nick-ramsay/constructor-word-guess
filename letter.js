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
            guessesRemaining--;
            console.log(guessesRemaining);
        }
    };
}

module.exports = Letter;