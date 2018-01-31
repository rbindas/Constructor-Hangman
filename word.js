var letter = require("./letter.js");

function Word(value) {
    this.value = value;
    this.letters = [];
    this.guesses = "";
    this.remainLives = this.value.length;
    this.flag = false;

//Push letters of the word into an array
    for (var i = 0; i < this.value.length; i++) {
        this.letters.push(new letter.Letter(this.value[i]));
    }
}

// Check if player guessed the right word 
Word.prototype.isComplete = function() {
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].show) {
            return false;
        };
    }
    return true;
};

// Keep track of player input, display actual letter if player guess the right letter, keep track of remaining lives 
Word.prototype.guessLetter = function(letter) {
    var lowerCaseLetter = letter.toLowerCase();
    this.flag = false;
    if (this.guesses.indexOf(lowerCaseLetter) != -1) {
        console.log("Sorry, that letter has already been guessed!");
        this.flag = true;
        return;
    }

    this.guesses += lowerCaseLetter;
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].value.toLowerCase() === lowerCaseLetter) {
            this.letters[i].show = true;
            this.flag = true;
        }
    }

    if (!this.flag) {
        console.log("Sorry, that is not a letter. Try again!");
        this.remainLives--;
    } else
        console.log("Correct!");
};

// Convert to string
Word.prototype.toString = function() {
    var output = "";
    for (var i = 0; i < this.letters.length; i++) {
        output += this.letters[i].showLetter();
    }
    return output;
};

module.exports = Word;var letter = require("./letter.js");


function Word(value) {
    this.value = value;
    this.letters = [];
    this.guesses = "";
    this.remainLives = this.value.length;
    this.flag = false;

//Push letters of the word into an array
    for (var i = 0; i < this.value.length; i++) {
        this.letters.push(new letter.Letter(this.value[i]));
    }
}

// Check if player guessed the right word 
Word.prototype.isComplete = function() {
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].show) {
            return false;
        };
    }
    return true;
};

// Keep track of player input, display actual letter if player guess the right letter, keep track of remaining lives 
Word.prototype.guessLetter = function(letter) {
    var lowerCaseLetter = letter.toLowerCase();
    this.flag = false;
    if (this.guesses.indexOf(lowerCaseLetter) != -1) {
        console.log("Sorry, that letter was already guessed!");
        this.flag = true;
        return;
    }

    this.guesses += lowerCaseLetter;
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].value.toLowerCase() === lowerCaseLetter) {
            this.letters[i].show = true;
            this.flag = true;
        }
    }

    if (!this.flag) {
        console.log("Sorry, that is not a letter!");
        this.remainLives--;
    } else
        console.log("Correct!");
};

// Convert to string
Word.prototype.toString = function() {
    var output = "";
    for (var i = 0; i < this.letters.length; i++) {
        output += this.letters[i].showLetter();
    }
    return output;
};

module.exports = Word;