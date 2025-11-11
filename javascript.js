var humanScore = 0;
var computerScore = 0;

function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0:return("ROCK");
        case 1:return("PAPER");
        case 2:return("SCISSORS");
    }
}

function getHumanChoice(){
    let choice = prompt("What do you choose?");
    return(choice.toUpperCase());
}

function playRound(humanChoice,computerChoice){
    if(humanChoice === "ROCK"){
        switch (computerChoice){
            case "ROCK":
                console.log("Its a draw!");
                break;
            case "PAPER":
                console.log("You lose!Paper beats Rock.")
                computerScore ++;
                break;
            case "SCISSORS":
                console.log("You win! Rock beats Scissors.")
                humanScore ++;
                break;
        }
    }else if(humanChoice === "PAPER"){
          switch (computerChoice){
            case "ROCK":
                console.log("You win! Paper beats Rock.");
                humanScore ++;
                break;
            case "PAPER":
                console.log("Its a draw!")
                break;
            case "SCISSORS":
                console.log("You lose! Scissors beats Paper.")
                computerScore ++;
                break;
        }
    }else if(humanChoice === "SCISSORS"){
           switch (computerChoice){
            case "ROCK":
                console.log("You Lose! Rock beats Scissors.");
                computerScore ++;
                break;
            case "PAPER":
                console.log("You win! Scissors beats Paper.")
                humanScore ++;
                break;
            case "SCISSORS":
                console.log("Its a draw.")
                break;
        }
    }
}

function playGame(){
    var round = 0;
    while( round < 5 ) 
    {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();  
        
        playRound(humanChoice,computerChoice); 
        round++;
        console.log ("Your score: "+humanScore);
        console.log("Computer score: "+computerScore);
        console.log("Round: "+round);
    }

    if(humanScore>computerScore){
        console.log("You won! " + humanScore + " vs " + computerScore+".")
    }else if(humanScore<computerScore){
        console.log("You lost! " + humanScore + " vs " + computerScore+".")
    }else {
        onsole.log("Its a draw! " + humanScore + " vs " + computerScore+".")
    }
}


playGame();


