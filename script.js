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

function game() {
    var rounds = parseInt(prompt("How many rounds would you like to play?"));
    var userScore = 0;
    var computerScore  = 0;
    for (var i = 0; i < rounds; i++) {
        userSelection = prompt("Rock, Paper or Scissor?");
        result = playRound(userSelection, getComputerChoice());
        alert(result);
        if (result.substr(0,8)==="You lose") {
            computerScore++;
        }
        else if (result.substr(0,8)==="You win!") {
            userScore++;
        }
      }
    if (userScore>computerScore){
        alert(`You win this game! Your score is ${userScore}, Computer score is ${computerScore}`);
    }
    else if (userScore<computerScore){
        alert(`You lose this game! Your score is ${userScore}, Computer score is ${computerScore}`);
    }
    else {
        alert(`This game is tied! Your score is ${userScore}, Computer score is ${computerScore}`);
    }
}