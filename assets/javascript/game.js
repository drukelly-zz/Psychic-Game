const user = {
  "score" : 0,
  "chances" : 9
};
const guesses = [];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const lettersGuessed = document.getElementsByClassName("lettersGuessed")[0];

document.onkeyup = (event) => {
  letterChecker(event.key);
  console.log(user.score, user.chances);
}

const letterChecker = (letter) => {
  if (letters.indexOf(letter[0]) !== -1) {
    guesses.push(letter);
    lettersGuessed.append(`${guesses.pop()}, `);
    // console.log(letter);
  } else {
    console.log("not a letter!");
  }
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}