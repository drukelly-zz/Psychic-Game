// objects and variables
let user = {
  "chances" : 9,
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
const clearGuessBoard = (selector) => {
  selector.innerHTML = "";
}

const displayScores = () => {
  const userScoreBox = document.getElementsByClassName("score-user")[0];
  const cpuScoreBox = document.getElementsByClassName("score-cpu")[0];
  const numOfGuesses = document.getElementsByClassName("num-guesses-left")[0];
  userScoreBox.innerText = user["score"];
  cpuScoreBox.innerText = cpu["score"];
  numOfGuesses.innerText = user["chances"];
}

// poc function: not sure if it will behave as expected
const determineWinner = (userScore, cpuScore) => {
  const overlay = document.createElement("div");
  const modal = document.createElement("div");
  overlay.className = "overlay";
  modal.className = "modal";
  if (userScore > 10) {
    const message = document.createTextNode("YOU WIN!");
    modal.appendChild(message);
    document.body.append(overlay);
    document.body.append(modal);
    console.log("YOU WIN!");
    var playerWins = setTimeout(() => {
      resetGame();
    }, 5 * 1000);
  }
  if (cpuScore > 10) {
    const message = document.createTextNode("YOU LOSE");
    modal.appendChild(message);
    document.body.append(overlay);
    document.body.append(modal);
    console.log("YOU LOSE");
    var cpuWins = setTimeout(() => {
      resetGame();
    }, 5 * 1000);
  }
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const letterAlreadyGuessed = (letter, array) => {
  if (array.indexOf(letter[0]) !== -1) {
    console.log('repeated entry');
  } else {
    if (user["chances"] === 0) {
      // cpu gets a point when user runs out of guesses
      ++cpu["score"];
      user["chances"] = 9;
      clearGuessBoard(lettersGuessed);
      nextRound();
      displayScores();
    } else {
      --user["chances"];
    }
    guesses.push(letter);
    lettersGuessed.append(`${guesses[guesses.length-1]}, `);
  }
}

const isLetter = (letter, array) => {
  // check to see if keyed letter is indeed a letter
  if (array.indexOf(letter[0]) !== -1) {
    // no repeated entries! push unique entries only
    if (!letterAlreadyGuessed(letter, guesses)) {
      console.log(guesses, user["chances"]);
      // if the player guesses the random/selected letter
      if (guesses[guesses.length-1] === selectedLetter) {
        ++user["score"];
        clearGuessBoard(lettersGuessed);
        nextRound();
        displayScores();
      }
      // once the game starts, modals, begone!
      modalBegone(modal, overlay);
    }
  // something else was keyed in
  } else {
    // alert(`You typed in ${event.key}. Please type in a valid letter.`);
    console.log(`You typed in ${event.key}. Please type in a valid letter.`);
  }
}

const modalBegone = (modal, overlay) => {
  overlay.remove();
  modal.remove();
}

// TODO
const nextRound = () => {
  guesses.length = 0;
  let selectedLetter = randomLetter(letters);
  console.log(`winning letter is => ${selectedLetter}`);
  user["chances"] = 9;
}

const randomLetter = (array) => {
  const length = array.length;
  return array[getRandomInt(length)];
}
// put selected letter into memory...
let selectedLetter = randomLetter(letters);

const resetGame = () => {
  user = {
    "chances" : 9,
    "score" : 0
  }
  cpu["score"] = 0;
}

// onload
console.log(`winning letter is => ${selectedLetter}`);

// TODO
// - start a new round and get new random cpu letter
// - reset scores and guesses count after the 9th try
// - determine winner