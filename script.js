let rps;
let b;

function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
    if (a === 0) {
        return 'rock';
    } else if (a === 1) {
        return 'paper';
    } else if (a === 2) {
        return 'scissors';
    }
}

function getPlayersChoice() {
    let input = prompt("Unesi Rock, Paper, ili Scissors");
    while (input === null || !['rock', 'paper', 'scissors'].includes(input.toLowerCase())) {
        input = prompt("Unesi: Rock, Paper, ili Scissors");
    }
    return input.toLowerCase();
}

const computerSelection = getComputerChoice();
const playersChoice = getPlayersChoice();
let winCount =0
let brojPartija =0
function playRound(computerSelection, playersChoice, winCount) {
   
        if (computerSelection === playersChoice) {
            brojPartija ++;
            return 'Nereseno';
        } else if (
            (computerSelection === 'rock' && playersChoice === 'scissors') ||
            (computerSelection === 'paper' && playersChoice === 'rock') ||
            (computerSelection === 'scissors' && playersChoice === 'paper')
        ) {
            brojPartija ++;
            return 'Izgubio si';
        } else {
            brojPartija ++;
            winCount++;
            return 'Pobedio si';
        }
    }
    


console.log("Komp:", computerSelection);
console.log("Plejer:", playersChoice);
console.log(playRound(computerSelection, playersChoice));

