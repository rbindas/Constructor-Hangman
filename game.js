//app.js file will randomly select a word for the play
// function to take a random word from the array 

var randomWord = function (){
	// array of words a user can choose 
	var wordArray = ['airplane','rhythm','skyjacking','absurd','azure'];
	
	// Choose a random variable from word bank
	var word = wordArray[Math.floor(Math.random() * wordArray.length)];
	
	// return the choosen word
	// console.log(word);
	return word;
	}
// return a random word
module.exports = randomWord;
