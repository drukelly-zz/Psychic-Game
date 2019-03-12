const isLetter = (letter, array) => {
  if (array.indexOf(letter[0]) !== -1) {
    console.log(letter);
  } else {
    // alert(`You typed in ${event.key}. Please type in a valid letter.`);
    console.log(`You typed in ${event.key}. Please type in a valid letter.`);
  }
}
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
const updateScores = () => {
  remainingGuesses.innerText = user["chances"];
  userScore.innerText = user["score"];
  cpuScore.innerText = cpu["score"];
}

let cpu = {
  "score" : 0
}
let user = {
  "chances" : 9,
  "score" : 0
}

const guesses = [];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const generatedCharacter = letters[getRandomInt(letters.length)];

const remainingGuesses = document.getElementsByClassName("guesses")[0];
const userScore = document.getElementsByClassName("user")[0];
const cpuScore = document.getElementsByClassName("cpu")[0];

document.onkeypress = (event) => {
  console.log(`the winning key is => ${generatedCharacter}`);
  let guess = event.key;
  if (isLetter(guess, letters)) {
    return true;
  } else {
    (guess === generatedCharacter) ? ++user["score"] : --user["chances"];
    if (user["chances"] === 0) {
      ++cpu["score"];
    }
  }
  updateScores();
}

// onload
updateScores();