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
      user["chances"] = 9;
    } else {
      --user["chances"];
    }
    guesses.push(letter);
    lettersGuessed.append(`${guesses[guesses.length-1]}, `);
  }
}

const isLetter = (letter, array) => {
  // check to see if keyed letter is a letter
  if (array.indexOf(letter[0]) !== -1) {
    // no repeated entries! push unique entries only
    if (!letterAlreadyGuessed(letter, guesses)) {
      console.log(guesses, user["chances"]);
      console.log(`winning letter is => ${selectedLetter}`);
      modalBegone(modal, overlay);
    }
  } else {
    // alert(`You typed in ${event.key}. Please type in a valid letter.`);
    console.log(`You typed in ${event.key}. Please type in a valid letter.`);
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
// put selected letter into memory...
let selectedLetter = randomLetter(letters);

const resetGame = () => {
  user = {
    "chances" : 9,
    "score" : 0
  }
  cpu["score"] = 0;
}

// TODO
// - start a new round and get new random cpu letter
// - tabulate score
// - decrease guess count
// - reset scores and guesses count after the 9th try
// - determine winner