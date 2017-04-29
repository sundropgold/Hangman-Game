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

	// pokemon theme audio
	var audio = new Audio('assets/javascript/pkmn.mp3');

	// variable to keep track of # of guesses remaining
	var guessCount = 0; 

	document.getElementById('counter').innerHTML = "Number of Guesses: " + guessCount + "/10";

	// array to keep track of user's guesses
	var userGuess =[];

	// array to keep track of pokemon caught
	var pokeCaught = [];

	document.getElementById("letters").innerHTML = "Letters Used: " + userGuess.join(" ");


	// array of available letters to guess
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
					'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
					'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
					'y', 'z'];

	// array of all possible pokemon to guess
	var pokemon = ['bulbasaur', 'ivysaur', 'venusaur',
					'charmander', 'charmeleon', 'charizard',
					'squirtle', 'wartortle', 'blastoise', 
					'caterpie', 'metapod', 'butterfree', 
					'weedle', 'kakuna', 'beedrill', 'pidgey',
					'pidgeotto', 'pidgeot', 'rattata', 'raticate',
					'spearow', 'fearow', 'ekans', 'arbok', 
					'pikachu', 'raichu', 'sandshrew', 'sandslash',
					'nidoran', 'nidorina', 'nidoqueen', 'nidoran', 
					'nidorino', 'nidoking', 'clefairy', 'clefable',
					'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff',
					'zubat', 'golbat', 'oddish', 'gloom', 'vileplume',
					'paras', 'parasect', 'venonat', 'venomoth', 'diglett',
					'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck',
					'mankey', 'primeape', 'growlithe', 'arcanine', 
					'poliwag', 'poliwhirl', 'poliwrath', 'abra',
					'kadabra', 'alakazam', 'machop', 'machoke', 'machamp',
					'bellsprout', 'weepinbell', 'victreebel', 'tentacool',
					'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta',
					'rapidash', 'slowpoke', 'slowbro', 'magnemite',
					'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel',
					'dewgong', 'grimer', 'muk', 'shellder', 'cloyster',
					'gastly', 'haunter', 'gengar', 'onix', 'drowzee',
					'hypno', 'krabby', 'kingler', 'voltorb', 'electrode',
					'exeggcute', 'exeggutor', 'cubone', 'marowak', 
					'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 
					'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 
					'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 
					'staryu', 'starmie', 'mrmime', 'scyther', 'jynx', 
					'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp',
					'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon',
					'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar',
					'kabuto', 'kabutops', 'aerodactyl', 'snorlax',
					'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 
					'dragonite', 'mewtwo', 'mew'];


	var mysterypkmn;
	var guesspkmn;

	var pkmnlength = pokemon.length;
	// console.log(pkmnlength);

	// function get randomized mystery pokemon from pokemon array
	 function getPokemon(pokemonArray) { 
		var getmysterypkmn = pokemon[Math.floor(Math.random() * pkmnlength)];
		// log mysterypkmn in console
		console.log(getmysterypkmn);

		return getmysterypkmn;
	}

	// function to translate mystery pokemon into blanks
	function createBlanks(getmysterypkmn) {
		
		// get blanks
		var getguesspkmn = getmysterypkmn.split("").map(function(){
			
			return "_";

		});

		// log guesspkmn in console
		console.log(getguesspkmn);
	
		return getguesspkmn;
	};

	var index; 
	var letterGuess;

	/* ------------ GAME PLAY FUNCTIONS ------------ */ 

	/* 

		// get random pokemon
		// display blank guesspkmn values
		// play game
		// reset game & generate a new random pokemon

		after each user's guess, move letters from 
		alphabet array to userguess array using a loop.

		keep track of guesses use (10 guesses total;
		correct guesses don't count )
		
		use indexOf to check if letter is already in string/array
		
		if letterGuess matches letter in mysterypkmn array, then
		reveal the letter

	*/

	// get your mystery pokemon
	mysterypkmn = getPokemon(pokemon);

	// get your guess pokemon blanks
	guesspkmn = createBlanks(mysterypkmn);


	// display guesspkmn blanks
	document.getElementById('hangman').innerHTML = guesspkmn.join(" ");

	// display wins
	document.getElementById('wincount').innerHTML = "Wins: " + wins;

	// display pokemon caught
	document.getElementById('caught').innerHTML = "Pokemon Caught: " +pokeCaught.join(" ");


	document.onkeyup = function(event) {

		// variable to hold user's letter guess
		letterGuess = String.fromCharCode(event.keyCode).toLowerCase();

		
		if (alphabet.indexOf(letterGuess) > -1) {
			// log letterGuess in the console
			console.log(letterGuess);
		}
		

		// grabs the index of the letterGuess in mysterpkmn array
		index = mysterypkmn.indexOf(letterGuess);
	
		// while the user's guess exists in the array
		while (index > -1) {

			// set the guess value to the corresponding blank
			guesspkmn[index] = letterGuess;

			document.getElementById('hangman').innerHTML = guesspkmn.join(" ");

			index = mysterypkmn.indexOf(letterGuess, index + 1);

		}

		if (mysterypkmn.indexOf(letterGuess) == -1) {
				// push onto userGuess array

			if (userGuess.indexOf(letterGuess) == -1) {
				// don't push doubles into user guess array
				userGuess.push(letterGuess);
			}

			guessCount ++;

			document.getElementById('letters').innerHTML = "Letters Used: " + userGuess.join(" ");


			// increase guess limitcounter here 
			// using length property of user guess array
			// so that it counts each letter only once
			document.getElementById('counter').innerHTML = "Number of Guesses: " + (userGuess.length) + "/10";
		}

		// if there are no more blanks left, then player has won
		if (guesspkmn.indexOf('_') == -1) {
		
			var startTime = 50;
			var endTime = 59;
			audio.currentTime = startTime;

			audio.play();

			wins ++;
			
			document.getElementById('wincount').innerHTML = "Wins: " + wins;

			// push pokemon caught into pokeCaught array
			pokeCaught.push(mysterypkmn);
			document.getElementById('caught').innerHTML = "Pokemon Caught: " + pokeCaught.join(" ");

			// get your mystery pokemon
			mysterypkmn = getPokemon(pokemon);

			// get your guess pokemon blanks
			guesspkmn = createBlanks(mysterypkmn);

			// display guesspkmn blanks
			document.getElementById('hangman').innerHTML = guesspkmn.join(" ");

			guessCount = 0;

			document.getElementById('counter').innerHTML = "Number of Guesses: " + guessCount + "/10";

			userGuess = [];

			document.getElementById('letters').innerHTML = "Letters Used: " + userGuess.join(" ");
		
			if(audio.currentTime > endTime) {
				audio.currentTime = 50;
				audio.pause;
			}
		}



		if (userGuess.length > 10) {
			// get your mystery pokemon
			mysterypkmn = getPokemon(pokemon);

			// get your guess pokemon blanks
			guesspkmn = createBlanks(mysterypkmn);

			// display guesspkmn blanks
			document.getElementById('hangman').innerHTML = guesspkmn.join(" ");

			guessCount = 0;

			document.getElementById('counter').innerHTML = "Number of Guesses: " + guessCount + "/10";

			userGuess = [];

			document.getElementById('letters').innerHTML = "Letters Used: " + userGuess.join(" ");
		}

	}

}
