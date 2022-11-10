function computerPlay(){
    const random = Math.random();
    if (random < 0.34) {
        return "rock";
    } else if (random < 0.67) {
        return "paper";
    } else if (random <= 1) {
        return "scissors";
    }
}

function playRound (playerSelection, computer)