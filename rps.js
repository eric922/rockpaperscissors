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
    if(playerSelection == computerSelection){
        console.log("This round is a tie")
    }
    else if(playerSelection == 'rock' && computerSelection == "paper"){
        console.log("You chose rock and the computer chose paper. You lose")
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You chose paper and the computer chose scissors. You lose")
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You chose scissors and the computer chose rock. You lose")
    }
    else{
        console.log("You win!")
    }
}
ComputerChoice = getComputerChoice();
playerChoice = prompt("Please enter your selection").toLowerCase()
console.log(playerChoice)
console.log(ComputerChoice);
playRound(playerChoice, ComputerChoice)