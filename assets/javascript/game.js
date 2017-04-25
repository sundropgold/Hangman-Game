// executes the script once the web page is completely loaded
window.onload = function() {

	/* 
		---------- INITIAL GAME SET UP ---------- 
		- variables and arrays are declared/initialized
	*/


	// variable to keep track of wins
	var wins = 0;

	// variable to keep track of game
	var gameOn = true;

	// variable to keep track of # of guesses remaining
	var guessCount; 

	// array to keep track of user's guesses
	var userGuess =[];

	// array of available letters to guess
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
					'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
					'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
					'y', 'z'];

	// array of all possible pokemon to guess
	var pokemon = ['bulbasaur', 'ivysaur', 'venusaur',
					'charmander', 'charmeleon', 'charizard',
					'squirtle', 'wartortle', 'blastoise', 
					'pikachu'];

	// randomized mystery pokemon, and splits the string into an array
	var mysterypkmn = pokemon[Math.floor(Math.random() * 10)];
	// log mysterypkmn in console
	console.log(mysterypkmn);

	var guesspkmn = mysterypkmn.split("").map(function(){
		return"_";
	})

	// log guesspkmn in console
	console.log(guesspkmn);

	/* ----------- KEY PRESS FUNCTIONS ---------- */

	var index; 
	var letterGuess;

	document.onkeyup = function(event) {


		// variable to hold user's letter guess
		letterGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if (alphabet.indexOf(letterGuess) > -1) {
			// log letterGuess in the console
			console.log(letterGuess);

			// grabs the index of the letterGuess in mysterpkmn array
			index = mysterypkmn.indexOf(letterGuess);
		}

		return index;
	}

	/* ------------ GAME PLAY FUNCTIONS ------------ */ 

	/* 

		while not game over, keep playing

		after each user's guess, move letters from 
		alphabet array to userguess array using a loop.

		keep track of guesses use (10 guesses total;
		correct guesses don't count )
		
		use indexOf to check if letter is already in string/array
		
		if letterGuess matches letter in mysterypkmn array, then
		reveal the letter

	*/

	//var userPkmnGuess = function() {

		// while game on is true
		while (gameOn == true) {

			// if the letter is not yet in the userGuess array,
			if (userGuess.indexOf(letterGuess) == -1) {
				// push onto userGuess array
				userGuess.push(letterGuess);
			}


			if (index == -1) {
				guessCount++;
			}

			// while the user's guess exists in the array
			while (index > -1) {

				guesspkmn[index] = letterGuess;

				index = mysterypkmn.indexOf(letterGuess, index + 1);

			}

			// if there are no more blanks left, then player has won
			if (guesspkmn.indexOf('_') == -1) {
				wins++;
			}

			// if the guessCount is over 10, the game will end
			if (guessCount > 10) {
				gameOn = false;
			}

		}

	//};


	/* --------------- GAME OBJECT --------------- */
	// get random pokemon
	// display blank guesspkmn values
	// play game
	// reset game & generate a new random pokemon

}