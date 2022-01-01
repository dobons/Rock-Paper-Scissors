const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");
const gameCounter = document.querySelector("#gameCount");
const userScore = document.querySelector("#userScore");
const cpuScore = document.querySelector("#cpuScore");
const resetButton = document.querySelector("#resetButton");
const results = document.querySelector("#result");
const finalResults = document.querySelector("#finalResult");
const resultsContainer = document.querySelector(".resultsContainer");

rockButton.addEventListener("click", function (e) {
  playRound("rock", computerPlay());
});

paperButton.addEventListener("click", function (e) {
  playRound("paper", computerPlay());
});

scissorButton.addEventListener("click", function (e) {
  playRound("scissors", computerPlay());
});

// Randomise the AIs selection
function computerPlay() {
  const randNum = Math.floor(Math.random() * 3);
  if (randNum === 0) {
    return "rock";
  } else if (randNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Initial Scores
let userCount = 0;
let cpuCount = 0;
let gameCount = 0;

// Plays one round and updates the scores
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();

  if (userCount !== 5 && cpuCount !== 5) {
    if (playerSelection === computerSelection) {
      results.innerText = "Draw! Both played the same hand";
      gameCount++;
      gameCounter.innerText = `Game count: ${gameCount}`;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      results.innerText = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection}!`;
      playerWins();
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      results.innerText = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection}!`;
      cpuWins();
    }
  }
}

function playerWins() {
  userCount++;
  gameCount++;
  userScore.innerText = `Player Score: ${userCount}`;
  cpuScore.innerText = `CPU Score: ${cpuCount}`;
  gameCounter.innerText = `Game count: ${gameCount}`;
  if (userCount === 5) {
    finalResults.innerText = "YOU WIN!";
    finalResults.style.color = "green";
    userScore.style.fontSize = "50px";
    gameOver();
  }
}

function cpuWins() {
  cpuCount++;
  gameCount++;
  userScore.innerText = `Player Score: ${userCount}`;
  cpuScore.innerText = `CPU Score: ${cpuCount}`;
  gameCounter.innerText = `Game count: ${gameCount}`;
  if (cpuCount === 5) {
    finalResults.innerText = "YOU LOSE!";
    finalResults.style.color = "red";
    cpuScore.style.fontSize = "50px";
    gameOver();
  }
}

function gameOver() {
  userCount = 0;
  cpuCount = 0;
  results.remove();
  rockButton.remove();
  paperButton.remove();
  scissorButton.remove();

  const reset = document.createElement("button");
  reset.id = "resetButton";
  reset.innerText = "Play Again?";
  resultsContainer.appendChild(reset);

  document.body.addEventListener("click", function (e) {
    if (e.target.id === "resetButton") {
      reset.remove();
      restartGame();
    }
  });
}

function restartGame() {
  location.reload();
}
