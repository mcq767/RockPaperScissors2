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
    if (playerSelection === computerSelection){
        return "It's a draw!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            ++playerScore;
            return "You win! Rock beats scissors"
        } else if (computerSelection === "paper"){
            ++computerScore;                     
            return "You lose! Paper beats Rock"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            ++computerScore;                         
            return "You lose! Scissors beats Paper"
        } else if (computerSelection === "rock") {
            ++playerScore;                     
            return "You win! Paper beats Rock"
        }
    } else {
        if (computerSelection === "paper") {
            ++playerScore;                      
            return "You win! Scissors beats Paper"
        } else if (computerSelection === "rock") {
            ++computerScore;  
            return "You lose! Rock beats scissors"
        } else {
            return "error"
        }
    }            
}

rockBtn.addEventListener("click", () => {
    playRound("rock");
})
//console.log(playRound() + " The score is " + computerScore + " to " + playerScore);                

