function getComputerChoice() {
    const options = ["rock", "paper", "scissor"];
    var choice = Math.floor(Math.random()*3);
    return (options[choice]);
}

function playRound (playerSelection, computerSelection) {
    playerSelection = (playerSelection).toLowerCase();
    if (playerSelection === computerSelection) {
        return "Its a tie!";
    }
    else if (playerSelection ==="rock" && computerSelection ==="paper") {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection ==="rock" && computerSelection ==="scissor") {
        return "You win! Rock beats Scissor";
    }
    else if (playerSelection ==="paper" && computerSelection ==="scissor") {
        return "You lose! Scissor beats Paper";
    }
    else if (playerSelection ==="paper" && computerSelection ==="rock") {
        return "You win! Paper beats Rock";
    }
    else if (playerSelection ==="scissor" && computerSelection ==="rock") {
        return "You lose! Rock beats Scissor";
    }
    else if (playerSelection ==="scissor" && computerSelection ==="paper") {
        return "You win! Scissor beats paper";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));