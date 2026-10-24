let score = {
  wins: 0,
  losses: 0,
  ties: 0
};
let playTime = 0;
let computerSelection = '';

function computerPlay() {
  const random = Math.random();
  playTime++;
  if (random >= 0 && random < 1/3) {
    computerSelection = 'rock';
  } else if (random >= 1/3 && random < 2/3) {
    computerSelection = 'paper';
  } else if (random >= 2/3 && random < 1) {
    computerSelection = 'scissors';
  }
}

function playRock (){
  let result = '';
  computerPlay();

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

  alert(`Computer chose is ${computerSelection}. Therefore, ${result}
You have played ${playTime} times.
Wins = ${score.wins}  Losses = ${score.losses}  Ties = ${score.ties}`);
}

function playPaper (){
  let result = '';
  computerPlay();

  if(computerSelection === 'rock'){
    result = 'You win!';
    score.wins++;
  } else if (computerSelection === 'paper') {
    result = 'It is a tie!';
    score.ties++;
  } else if (computerSelection === 'scissors') {
    result = 'You lose!';
    score.losses++;
  }

  alert(`Computer chose is ${computerSelection}. Therefore, ${result}
You have played ${playTime} times.
Wins = ${score.wins}  Losses = ${score.losses}  Ties = ${score.ties}`);
}

function playScissors (){
  let result = '';
  computerPlay();

  if(computerSelection === 'rock'){
    result = 'You lose!';
    score.losses++;
  } else if (computerSelection === 'paper') {
    result = 'You win!';
    score.wins++;
  } else if (computerSelection === 'scissors') {
    result = 'It is a tie!';
    score.ties++;
  }

  alert(`Computer chose is ${computerSelection}. Therefore, ${result}
You have played ${playTime} times.
Wins = ${score.wins}  Losses = ${score.losses}  Ties = ${score.ties}`);
}

function resetGame() {
  computerSelection = '';
  playTime = 0;
  score = { wins: 0, losses: 0, ties: 0 };
  alert('Game has been reset!');
}