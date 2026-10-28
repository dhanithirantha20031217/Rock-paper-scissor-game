let score =  JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};  
let playTime = 0;
let computerSelection = '';
let result = '';
let playerSelection = '';

function computerPlay() {
  const random = Math.random();
  playTime = score.wins + score.losses + score.ties + 1;
  if (random >= 0 && random < 1/3) {
    computerSelection = 'rock';
  } else if (random >= 1/3 && random < 2/3) {
    computerSelection = 'paper';
  } else if (random >= 2/3 && random < 1) {
    computerSelection = 'scissors';
  }
}

function playMove (playerChoice){
  playerSelection = playerChoice;
  computerPlay();

  if(playerChoice === 'rock') {
  if (computerSelection === 'rock') {
    result = 'It is a tie!';
    score.ties++;
  } else if (computerSelection === 'paper') {
    result = 'You lose!';
    score.losses++;
  } else if (computerSelection === 'scissors') {
    result = 'You win!';
    score.wins++;
  }
  
}

else if(playerChoice === 'paper') {
  if (computerSelection === 'rock') {
    result = 'You win!';
    score.wins++;
  } else if (computerSelection === 'paper') {
    result = 'It is a tie!';
    score.ties++;
  } else if (computerSelection === 'scissors') {
    result = 'You lose!';
    score.losses++;
  }
}

else if(playerChoice === 'scissors') {
  if (computerSelection === 'rock') {
    result = 'You lose!';
    score.losses++;
  } else if (computerSelection === 'paper') {
    result = 'You win!';
    score.wins++;
  } else if (computerSelection === 'scissors') {
    result = 'It is a tie!';
    score.ties++;
  }
} 

localStorage.setItem('score', JSON.stringify(score));

  updateState();
  document.getElementById('play-music').src = 'audio/click.mp3';
}

function resetGame() {
  computerSelection = '';
  playTime = 0;
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  updateReset();
}

function updateState() {
document.querySelector('.js-play-time').innerHTML = `You have played ${playTime} times.`;
document.querySelector('.js-result').innerHTML = ` ${result}.`;
document.querySelector('.js-state').innerHTML = `You     <img src="image/${playerSelection}-emoji.png" alt="${playerSelection}" class="player-move">  <img src="image/${computerSelection}-emoji.png" alt="${computerSelection}" class="player-move">     opponent.`;
document.querySelector('.js-score').innerHTML = `Wins = ${score.wins}   Losses = ${score.losses}   Ties = ${score.ties}`;
if (playTime  === 1) {
  document.querySelector('.game-stop').innerHTML = `<button onclick="showResults()" class="game-stop-button">Stop Game</button>`;
  document.querySelector('.game-restart').innerHTML = `<button onclick="resetGame()" class="game-restart-button">Restart Game</button>`;
  document.querySelector('.start-massege').innerHTML = '<p>Welcome to the game! Make your move.</p>';
}
  else {
    document.querySelector('.start-massege').innerHTML = ``;
  }
}

function updateReset() {
  document.querySelector('.js-play-time').innerHTML = `<p>Game has been reset!</p>`;
  document.querySelector('.js-result').innerHTML = '<p>you can start a new game!</p>';
  document.querySelector('.js-state').innerHTML = '';
  document.querySelector('.js-score').innerHTML = '';
  document.querySelector('.game-stop').innerHTML = ``;
  document.querySelector('.game-restart').innerHTML = ``;
  document.querySelector('.button-container').innerHTML = `<button class="move-button" onclick="playMove('rock')"><img src="image/rock-emoji.png" alt="Rock" title="Rock" class = "player-move"></button>
  <button class="move-button" onclick="playMove('paper')"><img src="image/paper-emoji.png" alt="Paper" title="Paper" class = "player-move"></button>
  <button class="move-button" onclick="playMove('scissors')"><img src="image/scissors-emoji.png" alt="Scissors" title="Scissors" class = "player-move"></button>`;
  document.getElementById('play-music').src = 'audio/reset.mp3';
}

function showResults() {
  if (score.wins > score.losses) {
    document.querySelector('.js-play-time').innerHTML = `<p>😃Congratulations! You are the winner!😃</p>`;
    document.querySelector('.js-result').innerHTML = `<p>Final Score: Wins = ${score.wins}, Losses = ${score.losses}, Ties = ${score.ties}</p>`;
    document.querySelector('.js-state').innerHTML = '';
    document.querySelector('.js-score').innerHTML = '';
    document.getElementById('play-music').src = 'audio/win.mp3';
  }
  else if (score.wins < score.losses) {
    document.querySelector('.js-play-time').innerHTML = `<p>😞Sorry! You lost the game!😞</p>`;
    document.querySelector('.js-result').innerHTML = `<p>Final Score: Wins = ${score.wins}, Losses = ${score.losses}, Ties = ${score.ties}</p>`;
    document.querySelector('.js-state').innerHTML = '';
    document.querySelector('.js-score').innerHTML = '';
    document.getElementById('play-music').src = 'audio/loss.mp3';
  }
  else if (score.wins === score.losses) {
    document.querySelector('.js-play-time').innerHTML = `<p>😐It's a tie!😐</p>`;
    document.querySelector('.js-result').innerHTML = `<p>Final Score: Wins = ${score.wins}, Losses = ${score.losses}, Ties = ${score.ties}</p>`;
    document.querySelector('.js-state').innerHTML = '';
    document.querySelector('.js-score').innerHTML = '';
    document.getElementById('play-music').src = 'audio/tie.mp3';
  }
  document.querySelector('.game-stop').innerHTML = `<button class="game-continue-button" onclick="continueGame()">Continue</button>`;
  document.querySelector('.button-container').innerHTML = `<button class="move-button"><img src="image/rock-emoji.png" alt="Rock" class = "player-move"></button>
  <button class="move-button"><img src="image/paper-emoji.png" alt="Paper" class = "player-move"></button>
  <button class="move-button"><img src="image/scissors-emoji.png" alt="Scissors" class = "player-move"></button>`;
}

function continueGame() {
document.querySelector('.js-play-time').innerHTML = `You have played ${playTime} times.`;
document.querySelector('.js-result').innerHTML = ` ${result}.`;
document.querySelector('.js-state').innerHTML = `You     <img src="image/${playerSelection}-emoji.png" alt="${playerSelection}" class="player-move">  <img src="image/${computerSelection}-emoji.png" alt="${computerSelection}" class="player-move">     opponent.`;
document.querySelector('.js-score').innerHTML = `Wins = ${score.wins}   Losses = ${score.losses}   Ties = ${score.ties}`;
document.querySelector('.game-stop').innerHTML = `<button onclick="showResults()" class="game-stop-button">Stop Game</button>`;
document.querySelector('.button-container').innerHTML = `<button class="move-button" onclick="playMove('rock')"><img src="image/rock-emoji.png" alt="Rock" class = "player-move"></button>
<button class="move-button" onclick="playMove('paper')"><img src="image/paper-emoji.png" alt="Paper" class = "player-move"></button>
<button class="move-button" onclick="playMove('scissors')"><img src="image/scissors-emoji.png" alt="Scissors" class = "player-move"></button>`;
document.getElementById('play-music').src = 'audio/click.mp3';
}

function rules() {
  document.querySelector('.catch1').innerHTML = `<button class="helped-button" onclick="withdrow()">Showed Rules</button>`;
  document.querySelector('.rules-content').innerHTML = `
  <div class="work">
    <p>1. Rock beats Scissors</p>
    <p>2. Scissors beats Paper</p>
    <p>3. Paper beats Rock</p>
    <p>4. If both players choose the same move, it's a tie.</p>
    <p>5. If player stop the game, he can continue or restart it.</p>
    <p>6. Players can choose to restart the game at any time.</p>
    <p>7. Have fun and enjoy the game!</p>
  </div>
  `;
  document.getElementById('music').src = 'audio/click.mp3';
}

function withdrow () {
  document.querySelector('.catch1').innerHTML = `<button onclick="rules();" class="help-button">Rules</button>`
  document.querySelector('.rules-content').innerHTML = `<div class="rules-content"></div>`
  document.getElementById('music').src = 'audio/click.mp3';
}