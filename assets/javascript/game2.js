// objects and variables
let user = {
  "chances" : 3,
  "score" : 0
};
let cpu = { "score" : 0 };
let guesses = [];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// selectors
const lettersGuessed = document.getElementsByClassName("letters-guessed")[0];
const modal = document.getElementsByClassName("modal")[0];
const overlay = document.getElementsByClassName("overlay")[0];

// onkeyup event
document.onkeyup = (event) => {
  displayScores(user["score"], cpu["score"]);
  isLetter(event.key, letters);
}

// functions
const clearGuessBoard = () => {
  lettersGuessed.innerHTML = "";
}

const displayScores = () => {
  const userScoreBox = document.getElementsByClassName("score-user")[0];
  const cpuScoreBox = document.getElementsByClassName("score-cpu")[0];
  const numOfGuesses = document.getElementsByClassName("num-guesses-left")[0];
  userScoreBox.innerText = user["score"];
  cpuScoreBox.innerText = cpu["score"];
  numOfGuesses.innerText = user["chances"];
}

// get random integer: accepts one param that's a number
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

// is it a letter? takes two params: a string (letter) and an array (guesses)
const isLetter = (letter, array) => {
  // check to see if keyed letter is indeed a letter
  if (array.indexOf(letter[0]) !== -1) {
    // no repeated entries! push unique entries only
    if (!letterAlreadyGuessed(letter, guesses)) {      
      // if the user guesses the letter correctly
      // user gets 1 pt
      if (guesses[guesses.length-1] === selectedLetter) {
        ++user["score"];
        displayScores();
        console.log("you guessed it!");
        nextRound();
      }
      
      // -1 case?
      // if (user["chances"] === -1) {
      //   console.log("0?");
      // }

      // once user runs out of chances, it's the end of the round
      // cpu gets 1 pt
      // TODO
        // start a new round
      if (user["chances"] === 0) {
        ++cpu["score"];
        displayScores();
        console.log("end of round");
        console.log("============");
        nextRound();
      }
    } else {
      console.log("2. repeated entry");
    }
    // game has begun!
    modalBegone(modal, overlay);
  // something else was keyed in
  } else {
    // alert(`You typed in ${event.key}. Please type in a valid letter.`);
    console.log(`You typed in ${event.key}. Please type in a valid letter.`);
  }
}

const letterAlreadyGuessed = (letter, array) => {
  if (array.indexOf(letter[0]) !== -1) {
    console.log("1. repeated entry");
  } else {
    guesses.push(letter);
    lettersGuessed.innerHTML += `<span class="letter">${guesses[guesses.length-1]}</span>`;
  }
}

const modalBegone = (modal, overlay) => {
  overlay.remove();
  modal.remove();
}

const nextRound = () => {
  user["chances"] = 3;
  let selectedLetter = randomLetter(letters);
  displayScores();
  console.log(`winning letter is => ${selectedLetter}`);
  guesses.length = 0;
  console.log(guesses);
  clearGuessBoard();
}

const randomLetter = (array) => {
  const length = array.length;
  return array[getRandomInt(length)];
}
// put selected letter into memory...
let selectedLetter = randomLetter(letters);

// onload
console.log(`winning letter is => ${selectedLetter}`);

// TODO
// - start a new round and get new random cpu letter
// - reset scores and guesses count after the 9th try
// - determine winner