// Functions
const isLetter = (letter, array) => {
  if (array.indexOf(letter[0]) !== -1) {
    // --user["chances"];
    return true;
  } else {
    // alert(`You typed in ${event.key}. Please type in a valid letter.`);
    console.log(`You typed in ${event.key}. Please type in a valid letter.`);
  }
}
const generateLetter = () => {
  var charToGuess = letters[getRandomInt(letters.length)];
  console.log(`the winning key is => ${charToGuess}`);
}
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
const noRepeatedEntries = (letter, array) => {
  if (array.indexOf(letter[0]) !== -1) {
    console.log("repeated entry");
  } else {
    guesses.push(letter);
    lettersGuessed.innerHTML += `<span class="letter">${guesses[guesses.length-1]}</span>`;
    console.log(guesses);
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
  generateLetter();
  updateScores();
  // onkeypress
  document.onkeypress = (event) => {
    let guess = event.key;
    if (isLetter(guess, letters) && noRepeatedEntries(guess, guesses)) {
      if (guess === charToGuess) {
        console.log("win!")
        // ++user["score"];
        // guesses.length = 0;
        // console.log(user);
      }
      if (user["chances"] === 0) {
        console.log("lose")
        // ++cpu["score"];
        // user["chances"] = 3;
        // console.log(cpu);
      }
      updateScores();
    }
  }
});