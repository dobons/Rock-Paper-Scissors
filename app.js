// Making the button start the game once its clicked
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");

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
    return "Rock";
  } else if (randNum === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Checks for a valid input
function userPrompt() {
  let userChoice = prompt("Enter Rock, Paper or Scissors").toLocaleLowerCase();
  while (
    userChoice != "rock" ||
    userChoice != "paper" ||
    userChoice != "scissors"
  ) {
    if (
      userChoice === "rock" ||
      userChoice === "paper" ||
      userChoice === "scissors"
    ) {
      break;
    } else {
      userChoice = prompt("Try again! ");
    }
  }
  return userChoice;
}

// Initial Scores
let userCount = 0;
let cpuCount = 0;

// Plays one round and updates the scores
function playRound(playerSelection, computerSelection) {

  userScore.innerText = `Player Score: ${userCount}`;
  cpuScore.innerText = `CPU Score: ${cpuCount}`;

  computerSelection = computerPlay().toLowerCase();

  if (userCount !== 5 && cpuCount !== 5) {
    if (playerSelection === computerSelection) {
      results.innerText = "Draw! Both played the same hand";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      results.innerText = "You won! Rock beats Scissors!";
      return userCount++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      results.innerText = "You won! Paper beats Rock!";
      return userCount++;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      results.innerText = "You won! Scissors beats Paper!";
      return userCount++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      results.innerText = "You lose! Paper beats Rock!";
      return cpuCount++;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      results.innerText = "You lose! Scissors beats Paper!";
      return cpuCount++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      results.innerText = "You lose! Rock beats Scissors!";
      return cpuCount++;
    }
  } else if (userCount === 5){
      finalResults.innerText = 'You Win!';
      finalResults.style.color = 'green';
      userScore.style.fontSize = '50px';
      gameOver();

    } else {
        finalResults.innerText = 'You lose!';
        finalResults.style.color = 'red';
        cpuScore.style.fontSize = '50px';
        gameOver();
    }
}

function gameOver(){
    userCount = 0;
    cpuCount = 0;
    results.remove();
    rockButton.remove();
    paperButton.remove();
    scissorButton.remove();

    const reset = document.createElement('button');
    reset.id = 'resetButton';
    reset.innerText = 'Play Again?'
    resultsContainer.appendChild(reset);

    document.body.addEventListener('click', function(e){
        if (e.target.id === 'resetButton'){
            reset.remove();
            restartGame();
        }
    })
}


function restartGame(){
    location.reload();

}


// // Plays 5 rounds and at the end will determine overall winner
// function game() {
//     // Set to one to make it simpler when showing the rounds
//     let count = 1;
//     for (let i = 0; count <= 5; i++){
//         console.log(`Round: ${count} `);
//         playRound();
//         count++;
//         console.log(`   Player Score: ${userCount}\n   CPU Score: ${cpuCount}`);
//         if (count === 6){
//             if (userCount > cpuCount) {
//                 console.log('Congrats! You win!');
//                 // Updates with the results
//                 finalResults.innerText = 'Congrats! You win!';
//             } else if (userCount === cpuCount) {
//                 console.log('Draw! You and the CPU tied!')
//                 finalResults.innerText = 'Draw! You and the CPU tied!';
//             } else {
//                 console.log('Oh no! You lost!')
//                 finalResults.innerText = 'Oh no! You lost!';
//             }
//         }
//     }
// }
