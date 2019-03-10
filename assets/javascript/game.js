// objects and variables
const user = {
  "chances" : 9,
  "score" : 0
};
const cpu = { "score" : 0 };
const guesses = [];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// selectors
const lettersGuessed = document.getElementsByClassName("lettersGuessed")[0];
const modal = document.getElementsByClassName("modal")[0];
const overlay = document.getElementsByClassName("overlay")[0];

// onkeyup event
document.onkeyup = (event) => {
  isLetter(event.key);
  console.log(user.score, user.chances);
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

const incrementScore = (player) => {
  ++player;
}

const isLetter = (letter) => {
  if (letters.indexOf(letter[0]) !== -1) {
    guesses.push(letter);
    lettersGuessed.append(`${guesses.pop()}, `);
    modalBegone(modal, overlay);
    // console.log(letter);
  } else {
    console.log("not a letter!");
  }
}

const modalBegone = (modal, overlay) => {
  overlay.remove();
  modal.remove();
}

const randomLetter = (array) => {
  const length = array.length;
  return array[getRandomInt(length)];
}

let testing = randomLetter(letters);

// TODO
// - only push unique letters into .letterGuessed / no duplicates
// - start a new round and get new random cpu letter
// - tabulate score
// - increase guess count
// - reset guess count after the 9th try
// - determine winner