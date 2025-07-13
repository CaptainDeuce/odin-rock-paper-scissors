function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber <= 0.67 && randomNumber > 0.33) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Pick rock, paper, or scissors");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("It's a tie.");
            } else if (computerChoice === "paper") {
                console.log("You lose! Paper beats rock");
                computerScore++;
            } else {
                console.log("You win! Rock beats scissors");
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats rock");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("It's a tie.");
            } else {
                console.log("You lose! Scissors beat paper");
                computerScore++;
            }
        } else {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats scissors");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beats paper");
                humanScore++;
            } else {
                console.log("It's a tie.");
            }
        }
    }

    const rockBtn = document.querySelector(".rock");
    rockBtn.addEventListener("click", () => {
        let humanSelection = "rock";
        let computerSelection = getComputerChoice();
        playRound();
    });

    const paperBtn = document.querySelector(".paper");
    rockBtn.addEventListener("click", () => {
        let humanSelection = "paper";
        let computerSelection = getComputerChoice();
        playRound();
    });

    const scissorsBtn = document.querySelector(".scissors");
    rockBtn.addEventListener("click", () => {
        let humanSelection = "scissors";
        let computerSelection = getComputerChoice();
        playRound();
    });

    if (humanScore === computerScore) {
        console.log("You tied.");
    } else if (humanScore > computerScore) {
        console.log(`You win! You won ${humanScore} rounds`);
    } else {
        console.log(`You lose! The computer won ${computerScore} rounds`);
    }
}

playGame();