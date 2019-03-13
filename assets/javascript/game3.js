// Functions
const isLetter = (letter, array) => {
  if (array.indexOf(letter[0]) !== -1) {
    return true;
  } else {
    // alert(`You typed in ${event.key}. Please type in a valid letter.`);
    console.log(`You typed in ${event.key}. Please type in a valid letter.`);
  }
}
const emptyGuesses = (selector) => {
  selector.innerHTML = "";
}
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
const nextRound = (player) => {
  user["chances"] = 3;
  console.log(`${player} won that round!`);
  guesses.length = 0;
  let charToGuess = new Object();
  charToGuess = letters[getRandomInt(letters.length)];
  console.log(`the next winning key is => ${charToGuess}`);
  return charToGuess;
}
const noRepeatedEntries = (letter, array, charToGuess) => {
  if (array.indexOf(letter[0]) !== -1) {
    console.log("repeated entry");
  } else {
    guesses.push(letter);
    lettersGuessed.innerHTML += `<span class="letter">${guesses[guesses.length-1]}</span>`;
    return charToGuess;
  }
}
const updateScores = () => {
  remainingGuesses.innerText = user["chances"];
  userScore.innerText = user["score"];
  cpuScore.innerText = cpu["score"];
}

// Objects
let cpu = {
  "score" : 0
}
let user = {
  "chances" : 3,
  "score" : 0
}
// Arrays
const guesses = [];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Selectors
const remainingGuesses = document.getElementsByClassName("guesses")[0];
const userScore = document.getElementsByClassName("user")[0];
const cpuScore = document.getElementsByClassName("cpu")[0];
const lettersGuessed = document.getElementsByClassName("user-guesses")[0];

// Events
// onload
document.addEventListener("DOMContentLoaded", () => {
  let charToGuess = letters[getRandomInt(letters.length)];
  console.log(`the winning key is => ${charToGuess}`);
  updateScores();
  // onkeypress
  document.onkeypress = (event) => {
    let guess = event.key;
    if (isLetter(guess, letters) && noRepeatedEntries(guess, guesses, charToGuess)) {
      --user["chances"];
      if (guess === charToGuess) {
        ++user["score"];
        nextRound("user");
        emptyGuesses(lettersGuessed);
        console.log("next round => " + charToGuess);
      }
      if (user["chances"] === 0) {
        ++cpu["score"];
        nextRound("cpu");
        emptyGuesses(lettersGuessed);
        console.log("next round => " + charToGuess);
      }
      updateScores();
    }
  }
});