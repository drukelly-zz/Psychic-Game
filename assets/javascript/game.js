// objects and variables
let user = {
  "chances" : 9,
  "score" : 0
};
let cpu = { "score" : 0 };
let guesses = [];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// selectors
const lettersGuessed = document.getElementsByClassName("lettersGuessed")[0];
const modal = document.getElementsByClassName("modal")[0];
const overlay = document.getElementsByClassName("overlay")[0];

// onkeyup event
document.onkeyup = (event) => {
  isLetter(event.key, letters);
}

// functions
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
  }
  if (cpuScore > 10) {
    const message = document.createTextNode("YOU LOSE");
    modal.appendChild(message);
    document.body.append(overlay);
    document.body.append(modal);
    console.log("YOU LOSE");
  }
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const letterAlreadyGuessed = (letter, array) => {
  (array.indexOf(letter[0]) !== -1 && letter[0] === selectedLetter) ? console.log("already guessed!") : console.log(`psst... "${selectedLetter}"... go on...`)
}

const isLetter = (letter, array) => {
  if (array.indexOf(letter[0]) !== -1) {
    // not working as intended... yet
    if (letterAlreadyGuessed(letter, guesses)) {
      console.log('you already guessed that letter!')
    } else {
      guesses.push(letter);
      console.log(`${guesses}`);
      // console.log(guesses);
      lettersGuessed.append(`${guesses.pop()}, `);
    }
    modalBegone(modal, overlay);
  } else {
    console.log("not a letter!");
  }
}

const isRight = (player, score) => {
  player["score"] = ++score;
}

const modalBegone = (modal, overlay) => {
  overlay.remove();
  modal.remove();
}

const randomLetter = (array) => {
  const length = array.length;
  return array[getRandomInt(length)];
}
// put selected letter into memory... ?
let selectedLetter = randomLetter(letters);

const resetGame = () => {
  user = {
    "chances" : 9,
    "score" : 0
  }
  cpu["score"] = 0;
}

// TODO
// - only push unique letters into .letterGuessed / no duplicates
// - start a new round and get new random cpu letter
// - tabulate score
// - increase guess count
// - reset scores and guesses count after the 9th try
// - determine winner