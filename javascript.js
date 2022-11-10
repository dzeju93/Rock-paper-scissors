const choices = ["rock", "paper", "scissors"]
const winners = [];

function resetGame() {
    winners = []
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.display = "none";
}

function startGame() {

    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) =>
        img.addEventListener("click", () =>{
        if (img.id) {
            playRound(img.id);
        }
        })
    );
}

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return;
    }

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
        if(wins == 5){
            displayEnd()
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;

    if(playerWins == 5){
        document.querySelector(".winner").textContent = 'You Won 5 games, Congrats!'
    } else {
        document.querySelector(".winner").textContent = 'Sorry, the Compyter won 5 times.'
    }
    document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice,computerChoice,winner){
    document.querySelector(".playerChoice").textContent = `You chose: ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }`;
    document.querySelector(".computerChoice").textContent = `The Computer chose: ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }`;
    document.querySelector(".winner").textContent = `Round Winner: ${winner}`;
}

function tallyWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
    document.querySelector(".computerScore").textContent = `Score: ${computerWins}`;
    document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function computerSelect() {
    //todo - update the dom with the computer selection
    const choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function checkWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins.computerWins);
}

function checkWinner(choiceP, choiceC) {
    console.log(choiceP, choiceC);
    if (choiceP === choiceC) { 
        return 'Tie';
    } else if (
        (choiceP === "rock" && choiceC == "scissors") || 
        (choiceP === "paper" && choiceC == "rock") || 
        (choiceP === "scissors" && choiceC == "paper")
        ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

startGame();