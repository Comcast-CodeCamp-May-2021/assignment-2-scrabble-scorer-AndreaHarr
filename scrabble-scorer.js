// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.clear();
  let word = input.question("Let's play some scrabble! Enter a word to score: ");
  console.log(oldScrabbleScorer(word)); 
  return word
  
   //Parameter: word 
    //Modify the provided initialPrompt() function to prompt the user to enter a word to score.
    //do I need to define ,word,
    //Use the oldScrabbleScorer() function provided to score the word provided by the user. Print the result to the console.
    //input.question("Let's play some scrabble! Enter a word: ");
};
function simpleScore(word){
  return word.length
}
 let scoringAlgorithms =
 [
  {
    name: 'Simple score',
    description: 'Each letter is worth 1 point',
    scorerFunction: simpleScore
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowel are 3 pts, consonants are 1 pt',
    scorerFunction: vowelBonusScore
  },
   
  {
    name: 'Scrabble',
    description: 'The traditional scoring alogrithim',
    // scorerFunction: scrabbleScore
  }
  ];

//function simpleScore ``````

//function simpleScoreObject(word) {}

//function vowelBonusScore
// take in a word, and ouput a score
// loop through the word, if letter at index i in the word is a vowel, make score go up by 3
// if the letter is not a vowel, score just goes up by 1
// if letter at index i is included in our predetermined list of vowels, then add 3 to score
// this is called a function declaration
// vowelBonusScore('apple'); this should output a score of 9
// vowelBonusScore('word'); this should output a score of 6
function vowelBonusScore(word) {
  word = word.toUpperCase();
  let score = 0; 
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < word.length; i++){ // with methods, there's always parentheses vowels.includes() 
  // the .includes method is going to return true or false
  // let's say we pass apple into our vowelBonusScore function
  // in the first iteration of this for loop, word[i] is going to be 'a'
  // vowels.includes('a')
  //console.log(i);
    if(vowels.includes(word[i])) {
      score = score + 3;
 
    } else {
      score = score + 1;
      // your next task is to code what happens when word[i] is not a vowel
      // instead of adding 3 to score, we want to add 1
    }
  }
 
 return score;
}

//function scrabbleScore
let scrabbleScore;

// const scoringAlgorithms = [];//create new ojects(object literal)

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   console.clear()
   let userInput = initialPrompt();
   let score = simpleScore(userInput);
   console.log (score);
    console.log (vowelBonusScore(userInput));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

