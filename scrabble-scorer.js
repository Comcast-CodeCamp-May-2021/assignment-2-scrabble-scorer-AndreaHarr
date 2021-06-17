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
// console.log(oldPointStructure[''])
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
  let wordChoice = input.question("Let's play some scrabble! Enter a word to score: "); 
  return (wordChoice);
};

// function simpleScore

function simpleScore(word){
  return word.length;
}

//function vowelBonusScore

function vowelBonusScore(word) {
  word = word.toUpperCase();
  let score = 0; 
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < word.length; i++){ 

    if(vowels.includes(word[i])) {
      score = score + 3;
    } else {
      score = score + 1;
    }
  }
 
 return score;
}

//function scrabbleScore
let  scrabbleScore;

// const scoringAlgorithms = [];

let scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point',
    scorerFunction: simpleScore
  },

  {
    name:'Bonus Vowels',
    description:'Vowels are 3 pts, consonants are 1 pt.',
    scorerFunction: vowelBonusScore
  },
  
  {
    name:'Scrabble',
    description:'The traditional scoring algorithm',
    scorerFunction: oldScrabbleScorer
  },
];

function scorerPrompt() {
  let scoringChoice = input.question(`
  Which scoring algorithm would you like to use?

  0 - Simple: One point per character
  1 - Vowel Bonus: Vowels are worth 3 points
  2 - Scrabble: Uses scrabble point system
  Enter 0, 1, or 2: `);

  return scoringAlgorithms[scoringChoice];
  
}
let newPointStructure =transform(oldPointStructure);

function transform() {
  
  let transformObject = {};

  for (score in oldPointStructure) {
     
    for (let i = 0; i<oldPointStructure[score].length; i++) {

      transformObject[oldPointStructure[score][i].toLowerCase()] = Number(score);
    
    }
  
  };
 return transformObject
};

function runProgram
() {
   console.clear();
  let wordChoice = initialPrompt();
  let scoringObjectChoice = scorerPrompt();
  console.log()

   console.log(`Score for ${wordChoice}: ${scoringObjectChoice.scorerFunction(wordChoice)}
   
`)
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