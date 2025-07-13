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

    let displayResult = document.querySelector(".displayResults");

    function checkFinalScore(humanScore, computerScore) {
        if (humanScore === 5) {
            displayResult.textContent = `\nYou win!`;
        } else if (computerScore === 5) {
            displayResult.textContent = `\nYou lose!`;
        }
    }

    function playRound(humanChoice, computerChoice) {
        const body = document.querySelector("body");
        let roundDiv = document.createElement("div");
        body.insertBefore(roundDiv, displayResult);
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                roundDiv.textContent = "It's a tie.";
            } else if (computerChoice === "paper") {
                roundDiv.textContent = "You lose! Paper beats rock";
                computerScore++;
                checkFinalScore(humanScore, computerScore);
            } else {
                roundDiv.textContent = "You win! Rock beats scissors";
                humanScore++;
                checkFinalScore(humanScore, computerScore);
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                roundDiv.textContent = "You win! Paper beats rock";
                humanScore++;
                checkFinalScore(humanScore, computerScore);
            } else if (computerChoice === "paper") {
                roundDiv.textContent = "It's a tie.";
            } else {
                roundDiv.textContent = "You lose! Scissors beat paper";
                computerScore++;
                checkFinalScore(humanScore, computerScore);
            }
        } else {
            if (computerChoice === "rock") {
                roundDiv.textContent = "You lose! Rock beats scissors";
                computerScore++;
                checkFinalScore(humanScore, computerScore);
            } else if (computerChoice === "paper") {
                roundDiv.textContent = "You win! Scissors beats paper";
                humanScore++;
                checkFinalScore(humanScore, computerScore);
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
    paperBtn.addEventListener("click", () => {
        let humanSelection = "paper";
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });

    const scissorsBtn = document.querySelector(".scissors");
    scissorsBtn.addEventListener("click", () => {
        let humanSelection = "scissors";
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
}

playGame();