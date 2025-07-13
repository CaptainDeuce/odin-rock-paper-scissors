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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let roundDiv = document.createElement("div");
        body.appendChild(roundDiv);
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                roundDiv.textContent = "It's a tie.";
            } else if (computerChoice === "paper") {
                roundDiv.textContent = "You lose! Paper beats rock";
                computerScore++;
            } else {
                roundDiv.textContent = "You win! Rock beats scissors";
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                roundDiv.textContent = "You win! Paper beats rock";
                humanScore++;
            } else if (computerChoice === "paper") {
                roundDiv.textContent = "It's a tie.";
            } else {
                roundDiv.textContent = "You lose! Scissors beat paper";
                computerScore++;
            }
        } else {
            if (computerChoice === "rock") {
                roundDiv.textContent = "You lose! Rock beats scissors";
                computerScore++;
            } else if (computerChoice === "paper") {
                roundDiv.textContent = "You win! Scissors beats paper";
                humanScore++;
            } else {
                roundDiv.textContent = "It's a tie.";
            }
        }
    }

    const rockBtn = document.querySelector(".rock");
    rockBtn.addEventListener("click", () => {
        let humanSelection = "rock";
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });

    const paperBtn = document.querySelector(".paper");
    rockBtn.addEventListener("click", () => {
        let humanSelection = "paper";
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });

    const scissorsBtn = document.querySelector(".scissors");
    rockBtn.addEventListener("click", () => {
        let humanSelection = "scissors";
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });

    let displayResult = document.querySelector(".display-results");
    if (humanScore === 5) {
        displayResult.textContent = `You win!`;
    } else if (computerScore === 5) {
        displayResult.textContent = `You lose!`;
    }
}

playGame();