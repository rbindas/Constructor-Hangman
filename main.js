var chosenWord = require("./randomword.js");
var Word = require("./word.js");
var inquirer = require("inquirer");
var randomWord = chosenWord();
var myWord = new Word(randomWord);




console.log("Welcome to HANGMAN!");
console.log("Guess letters in order to figure out the secret word.");
console.log("===========================================================");

function startGame() {
    console.log("Secret Word : " + myWord + "\n");
    if (myWord.remainLives <= 0) {
        console.log('Sorry! You have no lives left!');
        console.log('The correct word is: ' + randomWord + '\n');
        playAgain();
    } else {
        playGame();
    }
}

function playGame() {
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Type a letter:',
    }]).then(function(letterInput) {
        var letter = letterInput.letter;
        myWord.guessLetter(letter);
        if (myWord.isComplete()) {
            console.log('Good job! You Got It! : ' + myWord.toString() + '\n');
            playAgain();
        } else {
            console.log('Lives Left: ' + myWord.remainLives + '\n');
            startGame();
        }

    });
}

function playAgain() {
    inquirer.prompt([{
        name: "confirm",
        type: "confirm",
        message: "Would you like to play again?"

    }]).then(function(answer) {
        if (answer.confirm === true) {
            newWord();
            console.log('\n');
            console.log('You have ' + myWord.remainLives + ' remaining guesses for the secret word.\n');
            startGame();
        } else {
            console.log("Thanks for playing!\n");
        }
    });
}

function newWord() {
    randomWord = chosenWord();
    myWord = new Word(randomWord);
}

//Start game:
startGame();