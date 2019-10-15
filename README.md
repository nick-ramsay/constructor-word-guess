# Constructor Word Guess

## Problem Summary 
- As an entertainment consumer, I would like a game that allows me to guess a word by guessing the letters.

## Overview
- This is a word guess game using constructors and run solely in the console. 

## Installation & Prerequisites

![Dependent Packages](https://github.com/nick-ramsay/readme-images/blob/master/constructor-word-guess/dependent_packages.jpg?raw=true)

- The constructor-word-guess is dependent upon four packages:
 1. Inquirer
 
- If you have cloned the repository with the package.json file, these packages can be installed using the npm-install command.

![Dependent Packages](https://github.com/nick-ramsay/readme-images/blob/master/constructor-word-guess/dependent_packages_install.jpg?raw=true)

## Instructions
- The constructor-word-guess application is opened with the following command: ```node index.js```

- To play the game, enter a lowercase letter and press enter. If the letter is correct, the underscore(s) concealing the letter will change to the letter you've guessed.

![Constructor Word Guess Functionality](https://github.com/nick-ramsay/readme-images/blob/master/constructor-word-guess/functionality.jpg?raw=true)

- If you guess all the correct letters, you will score a win and your next word will be given to you:

![Constructor Word Guess Functionality](https://github.com/nick-ramsay/readme-images/blob/master/constructor-word-guess/functionality_win.jpg?raw=true)

- If you select an incorrect letter, one point will be deducted from your Guesses Remaining total:

![Constructor Word Guess Functionality](https://github.com/nick-ramsay/readme-images/blob/master/constructor-word-guess/functionality_wrong_guess.jpg?raw=true)

- If you run out of guesses, you will be given a new word and your allowed guesses will be reset to ten:

![Constructor Word Guess Functionality](https://github.com/nick-ramsay/readme-images/blob/master/constructor-word-guess/functionality_wrong_guess_loss.jpg?raw=true)

## Built With
- The constructor-word-guess application was built using Node.js and the following Node Package Manage modules:

 1. Inquirer

## Authors 
- Developer: Nick Ramsay (#nick-ramsay)