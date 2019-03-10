const user = {
  "chances" : 9,
  "score" : 0
};
const cpu = { "score" : 0 };
const guesses = [];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const lettersGuessed = document.getElementsByClassName("lettersGuessed")[0];
const modal = document.getElementsByClassName("modal")[0];
const overlay = document.getElementsByClassName("overlay")[0];

document.onkeyup = (event) => {
  isLetter(event.key);
  console.log(user.score, user.chances);
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

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomLetter = (array) => {
  console.log(array[getRandomInt(array.length)]);
}

const incrementScore = (player) => {
  ++player;
}

const modalBegone = (modal, overlay) => {
  overlay.remove();
  modal.remove();
}