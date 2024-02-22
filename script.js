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
    while (input === null || !['rock', 'paper', 'scissors'].includes(input.toLowerCase())) {   //gugl
        input = prompt('Potrebno je uneti: rock paper ili scissors');
    }
    return input.toLowerCase();
}

function playRound(computerSelection, playersChoice) {
   
        if (computerSelection === playersChoice) {
            return 'Nereseno';
        } else if (
            (computerSelection === 'rock' && playersChoice === 'scissors') ||
            (computerSelection === 'paper' && playersChoice === 'rock') ||
            (computerSelection === 'scissors' && playersChoice === 'paper')
        ) {
            return 'Izgubio si';
        } else {
            winCount++;
            return 'Pobedio si';
        }
    }
    
let winCount = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playersChoice = getPlayersChoice();
        const result = playRound(computerSelection, playersChoice);
        console.log("Runda", i+1, "- Komp:", computerSelection, "- Plejer:", playersChoice, "- Rezultat:", result);  //gugl
        if (result === 'Pobedio si') {
            winCount++;
        }
    }
    console.log("Ukupan rezultat:", winCount >= 3 ? 'Pobedio si!' : 'Izgubio si!');
}

playGame();