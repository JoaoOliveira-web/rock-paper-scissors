var humanScore = 0;
var computerScore = 0;

const result = document.querySelector("#result");
const score = document.querySelector("#score");


function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0:return("ROCK");
        case 1:return("PAPER");
        case 2:return("SCISSORS");
    }
}

function playRound(humanChoice,computerChoice){
    if(humanChoice === "ROCK"){
        switch (computerChoice){
            case "ROCK":
                result.textContent="Its a draw!";
                score.textContent = "Score:"+humanScore +" vs "+computerScore;
                checkGameState();
                break;
            case "PAPER":
                result.textContent="You lose! Paper beats Rock.";
                computerScore ++;
                score.textContent = "Score:"+humanScore +" vs "+computerScore;
                checkGameState();
                break;
            case "SCISSORS":
                result.textContent="You win! Rock beats Scissors.";
                humanScore ++;
                score.textContent = "Score:"+humanScore +" vs "+computerScore;
                checkGameState();
                break;
        }
    }else if(humanChoice === "PAPER"){
          switch (computerChoice){
            case "ROCK":
                result.textContent="You win! Paper beats Rock.";
                humanScore ++;
                score.textContent = "Score:"+humanScore +" vs "+computerScore;
                checkGameState();
                break;
            case "PAPER":
                result.textContent="Its a draw!"
                score.textContent = "Score:"+humanScore +" vs "+computerScore;
                checkGameState();
                break;
            case "SCISSORS":
                result.textContent="You lose! Scissors beats Paper."
                computerScore ++;
                score.textContent = "Score:"+humanScore +" vs "+computerScore;
                checkGameState();
                break;
        }
    }else if(humanChoice === "SCISSORS"){
           switch (computerChoice){
            case "ROCK":
                result.textContent="You Lose! Rock beats Scissors.";
                computerScore ++;
                score.textContent = "Score:"+humanScore +" vs "+computerScore;
                checkGameState();
                break;
            case "PAPER":
                result.textContent="You win! Scissors beats Paper."
                humanScore ++;
                score.textContent = "Score:"+humanScore +" vs "+computerScore;
                checkGameState();
                break;
            case "SCISSORS":
                result.textContent="Its a draw."
                score.textContent = "Score:"+humanScore +" vs "+computerScore;
                checkGameState();
                break;
        }
    }
}

var resetGame = window.alert;
window.alert = function(msg) {
  resetGame(msg);
  humanScore = 0;
  computerScore = 0;
  score.textContent = "Score:"+humanScore +" vs "+computerScore;
};

function checkGameState(){

    if(humanScore === 5 || computerScore === 5){
        if(humanScore>computerScore){
            alert("You won! " + humanScore + " vs " + computerScore+".")
        }else 
            alert("You lost! " + humanScore + " vs " + computerScore+".")
    }
}


const btn_rock = document.querySelector("#rock");
btn_rock.addEventListener("click",function(){ playRound("ROCK",getComputerChoice())});

const btn_paper = document.querySelector("#paper");
btn_paper.addEventListener("click",function(){ playRound("PAPER",getComputerChoice())});

const btn_scissors = document.querySelector("#scissor");
btn_scissors.addEventListener("click",function(){ playRound("SCISSORS",getComputerChoice())});





