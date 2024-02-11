let rps;

function getComputerChoice() {
    let a = Math.floor(Math.random() * 3) + 1;
    if (a === 1) {
        rps = 'Rock';
    } else if (a === 2) {
        rps = 'Paper';
    } else if (a === 3) {
        rps = 'Scissors';
    }
    
    return rps;
}

const computerSelection = getComputerChoice();

const input = prompt()