function getComputerChoice(){
    let num = (Math.floor(Math.random() * 3))
    if(num == 0){
        choice = "rock";
    }
    else if(num == 1){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }
    //console.log(choice)
    return choice
}
function playRound(playerSelection, computerSelection){
    let message 
    let winner
    if(playerSelection == computerSelection){
        message = "This round is a tie"
        winner = "tie"
        console.log(message)
    }
    else if(playerSelection == 'rock' && computerSelection == "paper"){
        message = "You chose rock and the computer chose paper. You lose"
        winner = "computer"
        console.log(message)
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        message = "You chose paper and the computer chose scissors. You lose"
        winner = "computer"
        console.log(message)
        
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        message = "You chose scissors and the computer chose rock. You lose"
        winner = "computer"
        console.log(message)
        
    }
    else{
        message = "You win! " + playerSelection + " beats " + computerSelection
        console.log(message)
        winner = "player";
        
    }
    return winner
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    tie = 0;
    for(let i = 1; i < 6; i++){
    ComputerChoice = getComputerChoice();
    playerChoice = prompt("Please enter your selection").toLowerCase()
    let result = playRound(playerChoice, ComputerChoice)
    if(result == "computer"){
        computerScore++
    }
    else if(result == "player"){
        playerScore++
    }
    else{
        tie++
    }

    }
    console.log("The computer won " + computerScore + " rounds. " + "You won " + playerScore + " rounds. There were " + tie +" ties")
}

game()