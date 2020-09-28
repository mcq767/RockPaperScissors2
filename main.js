const options = [
    "rock",
    "paper",
    "scissors"
    ];
let playerScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
//computerPlay function generating random computer choice
let computerPlay = () => {
    let move = options[Math.floor(Math.random() * options.length)];
    return move;
    };

//playRound function taking two arguments, computerSelection and PlayerSelection                
let playRound = (playerSelection) => {

    //computerSelection storing the result of the call to a computerPlay function 
    let computerSelection = computerPlay();
    
    //if statement determining the winner
    if (playerSelection == computerSelection){
        return "It's a draw!"
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            ++playerScore;
            playerScoreDisplay.innerHTML = playerScore.toString();
            computerScoreDisplay.innerHTML = computerScore.toString();                
            return "You win! Rock beats scissors"
        } else if (computerSelection == "paper"){
            ++computerScore;
            playerScoreDisplay.innerHTML = playerScore.toString();
            computerScoreDisplay.innerHTML = computerScore.toString();                
            return "You lose! Paper beats Rock"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            ++computerScore;
            playerScoreDisplay.innerHTML = playerScore.toString();
            computerScoreDisplay.innerHTML = computerScore.toString();                
            return "You lose! Scissors beats Paper"
        } else if (computerSelection == "rock") {
            ++playerScore;
            playerScoreDisplay.innerHTML = playerScore.toString();
            computerScoreDisplay.innerHTML = computerScore.toString();                
            return "You win! Paper beats Rock"
        }
    } else {
        if (computerSelection == "paper") {
            ++playerScore;
            playerScoreDisplay.innerHTML = playerScore.toString();
            computerScoreDisplay.innerHTML = computerScore.toString();                                      
            return "You win! Scissors beats Paper"
        } else if (computerSelection == "rock") {
            ++computerScore;
            playerScoreDisplay.innerHTML = playerScore.toString();
            computerScoreDisplay.innerHTML = computerScore.toString();                  
            return "You lose! Rock beats scissors"
        } else {
            return "error"
        }
    }   
    playerScoreDisplay.innerHTML = playerScore.toString();
    computerScoreDisplay.innerHTML = computerScore.toString();
    
}

let gameOver = () => {
    if (playerScore == 3) {
        alert("You win!")
    } else if (computerScore ==3) {
        alert("You lose!")
    }
}

rockBtn.addEventListener("click", () => {
    console.log(playRound("rock"));
    gameOver();
})
paperBtn.addEventListener("click", () => {
    console.log(playRound("paper"));
    gameOver();
})
scissorsBtn.addEventListener("click", () => {
    console.log(playRound("scissors"));
    gameOver();
})
//console.log(playRound() + " The score is " + computerScore + " to " + playerScore);                

