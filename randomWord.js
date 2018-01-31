//Generate a random word from this list.
//==========================================================
var randomWord = function(){
	var wordArray = ['airplane','rhythm','skyjacking','absurd','azure'];
	var wordIndex = Math.floor(Math.random() * wordArray.length);
	return wordArray[wordIndex];
};

module.exports = randomWord;