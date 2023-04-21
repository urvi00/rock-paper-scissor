function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissor"];
    var choice = Math.floor(Math.random()*3);
    return (options[choice]);
}