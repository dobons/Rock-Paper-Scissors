// Making the button start the game once its clicked
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const results = document.querySelector("#result");

startButton.addEventListener('click', function(e) {
    // Executes the game 
    game();
})

// Reset button clears the game
resetButton.addEventListener('click', function(e) {
    userScore = 0;
    cpuScore = 0;
    count = 1;
    console.clear();
    game();
})

// Randomise the AIs selection
function computerPlay() {
    const randNum = (Math.floor(Math.random() * 3));
    if (randNum === 0){
        return 'Rock'
    } else if (randNum === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

// Checks for a valid input
function userPrompt(){
    let userChoice = prompt("Enter Rock, Paper or Scissors").toLocaleLowerCase();
    while (userChoice != "rock" || userChoice != "paper" || userChoice != "scissors") {
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
            break;
        } else{
            userChoice = prompt('Try again! ')
        }
    } 
    return userChoice
}

// Initial Scores
let userScore = 0;
let cpuScore = 0;

// Plays one round and updates the scores
function playRound(playerSelection, computerSelection) {
    playerSelection = userPrompt();
    computerSelection = computerPlay().toLowerCase();

    if (playerSelection === computerSelection){
        console.log('Draw! Both played the same hand') 

    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You won! Rock beats Scissors!') 
        return userScore++

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You won! Paper beats Rock!' ) 
        return userScore++

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You won! Scissors beats Paper!') 
        return userScore++

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats Rock!')         
        return cpuScore++

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! Scissors beats Paper!') 
        return cpuScore++

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats Scissors!') 
        return cpuScore++

    }
    
}

// Plays 5 rounds and at the end will determine overall winner
function game() {
    // Set to one to make it simpler when showing the rounds
    let count = 1;
    for (let i = 0; count <= 5; i++){
        console.log(`Round: ${count} `);
        playRound();        
        count++;
        console.log(`   Player Score: ${userScore}\n   CPU Score: ${cpuScore}`);
        if (count === 6){
            if (userScore > cpuScore) {
                console.log('Congrats! You win!');
                // Updates with the results
                results.innerText = 'Congrats! You win!';
            } else if (userScore === cpuScore) {
                console.log('Draw! You and the CPU tied!')
                results.innerText = 'Draw! You and the CPU tied!';
            } else {
                console.log('Oh no! You lost!')
                results.innerText = 'Oh no! You lost!';
            }
        }
    }
}




