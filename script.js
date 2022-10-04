'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highescore = 0;
const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  // No input
  if (!guessingNumber) {
    displayGuessMessage('Enter the number!');

    //Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Сorrectly!');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(205, 219, 17)';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('h1').textContent = 'You won!';

    if (score > highescore) {
      highescore = score;
      document.querySelector('.highscore').textContent = highescore;
    }
    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Too many' : 'Not enough'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  displayGuessMessage('Start guessing!');
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(7, 5, 135)';
  document.querySelector('.score').textContent = score;
});
