'use strict';

//Selecting elements
const playerEl = document.querySelector('.player');
const scoreEl = document.querySelector('#score');
const currentEl = document.querySelector('#current');
const highscoreEl = document.querySelector('#highscore');
const ballsEl = document.querySelector('#balls');
const btnShot = document.querySelector('.btn-shot');
const btnNew = document.querySelector('.btn-new');

let shot, currentScore, highScore, balls, playing, score;

// starting condition

const init = function () {
  shot = Math.trunc(Math.random() * 7);
  currentScore = 0;
  highScore = 0;
  balls = 6;
  playing = true;

  scoreEl.textContent = '?';
  highscoreEl.textContent = 0;
  currentEl.textContent = 0;
  ballsEl.textContent = 6;

  //   scoreEl.classList.add('hidden');
  playerEl.classList.remove('player-winner');
  playerEl.classList.add('player-active');
};
init();

// Shot functionality
btnShot.addEventListener('click', function () {
  if (playing) {
    // scoreEl.classList.remove('hidden');

    if (shot !== 0 && balls >= 1) {
      balls--;
      ballsEl.textContent = balls;
      scoreEl.textContent = shot;
      currentScore += shot;
      currentEl.textContent = currentScore;

      // console.log(balls);
      shot = Math.trunc(Math.random() * 7);
      if (currentScore >= 20) {
        highScore = currentScore;
        highscoreEl.textContent = highScore;

        playerEl.classList.add('player-winner');
        playerEl.classList.remove('player-active');
        scoreEl.textContent = '🏆';

        playing = false;
      }
    } else if (shot <= 0) {
      ballsEl.textContent = balls;
      balls--;
      scoreEl.textContent = 'Out';

      currentEl.textContent = currentScore;
      ballsEl.textContent = 'Game Over';
      //   document.querySelector('#balls-left').disabled = true;
    }
  }
});

btnNew.addEventListener('click', init);
