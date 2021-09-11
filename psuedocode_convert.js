const readline = require('readline-sync');
//////////////////
function guessCheck(cN, uN, uG) {
  if (uG === '1') {
    if (uN > cN) {
      return true;
    } else {
      return false;
    }
  } else if (uG === '2') {
      if (uN < cN) {
        return true;
      } else {
        return false;
      }
  } else if (uG === '3') {
      if (uN === cN) {
        return true;
      } else {
        return false;
      }
  } else {
    console.log('invalid input');
  }
}

function playAgain() {
  let again = readline.question('Would you like to play again? (Y/N)\n');

  if (again.toUpperCase() === 'Y') {
    return true;
  } else {
      return false;
  }
}
//////////////////

let play = true;

while (play === true) {
  let computerNumber = Math.floor(Math.random() * 100);
  let yourNumber = Number(readline.question("Please choose a number:\n"));

  let guess = readline.question("Is your number:\n1.) Higher\n2.) Lower\n3.) Equal\nGuess: ");
  if (guessCheck(computerNumber, yourNumber, guess) === true) {
    console.log(`YOU WIN!\nComputer's number: ${computerNumber}`);
  } else {
      console.log(`YOU LOSE!\nComputer's number: ${computerNumber}`);
  }

  if (playAgain() !== true) {
    play = false;
  }
}
