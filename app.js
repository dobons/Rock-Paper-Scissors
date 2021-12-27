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

let userScore = 0;
let cpuScore = 0;

function playRound(playerSelection, computerSelection) {
  
    playerSelection = prompt('Enter your input!').toLowerCase();
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

function game(score) {
    let count = 1;
    for (let i = 0; count < 6; i++){
        console.log(`Round: ${count} `);
        playRound();        
        count++;
        console.log(`   Player Score: ${userScore}\n   CPU Score: ${cpuScore}`);
        if (count === 6){
            if (userScore > cpuScore) {
                console.log('Congrats! You win!')
            } else if (userScore === cpuScore) {
                console.log('Draw! The scores are tied!')
            } else {
                console.log('Oh no! You lost!')
            }
        }
    }
}

game();
