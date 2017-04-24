// executes the script once the web page is completely loaded
window.onload = function() {

	/* 
		---------- INITIAL GAME SET UP ---------- 
		- variables and arrays are declared/initialized
	*/


	// variable to keep track of wins
	var wins = 0;

	// variable to keep track of # of guesses remaining
	var guessesRemaining; 

	// array to keep track of user's guesses
	var userguesses =[];

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
	var mysterypkmn = pokemon[Math.floor(Math.random() * 10)].split("");
	// log mysterypkmn in console
	console.log(mysterypkmn);

	// matching mysterypkmn array to guess the pokemon
	var guesskeys = [];

	var guessvals = [];

	var guesspkmn = [];

	// loop to populate guesspkmn with key/value pairs
	// letter : _
	for (var i = 0; i < mysterypkmn.length; i++) {
		
		// populate guess keys with mysterypkmn equivalent
		guesskeys[i] = mysterypkmn[i];
		

		// populate guess values with blanks to initially display
		guessvals[i] = '_';

		// store keys and values in guesspkmn
		guesspkmn[guesskeys[i]] =  guessvals[i];
	}
	
	/* 
		log guesspkmn in console
		keys should match mysterypkmn
		values should be _
	*/

	console.log(guesspkmn);


	/* ------------ GAME PLAY FUNCTIONS ------------ */ 

	/* 
		after each user's guess, move letters from 
		alphabet array to userguess array using a loop.

		check if
		if userguess matches guesspkmn key, 
		display key instead of value

	*/


	/* --------------- GAME OBJECT --------------- */
	// create game object to start the game

}