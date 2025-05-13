//Rock paper scissors project
//The game will be played against the computer

//The computer will randomly return rock, paper or scissors

//Let's also add a way to generate some text in the index.html file to show the results

let computerResult = document.querySelector('.computerResult');
let playerResult = document.querySelector('.yourResult');
let gameResult = document.querySelector('.gameResult');
const yourScore = document.querySelector('.humanScore');
const enemyScore = document.querySelector('.computerScore');
const startGame = document.querySelector('.startGame');
//The game also needs to have a function to be able to keep track of the players score
//Therefore we need to declare the variables and set them to 0 at game start

let humanScore = 0;
let computerScore = 0;


//First we need a way to generate something random that can be used to select between the three choices.
function getComputerChoice() {
    //The choice variables stores a random number between 0 and 100.
    let number = Math.floor(Math.random() * 100) + 1;
    let choice = "";
    //We can then make it conditional to choose rock, paper or scissors based on the number
    //An example of this could be using 0-33 = Rock
    if (number <= 33) {
        choice = "rock";
        return choice;
        //Paper would be between 34-66
    } else if (number > 33 && number <= 66) {
        choice = "paper";
        return choice;
        //Scissors would be 67-100
    } else {
        choice = "scissors";
        return choice;
    }
}


//Next up we need to create a function that establishes the Human Choice

function getHumanChoiceAndPlayRound() {
    //First we prompt the user by choosing between Rock, Paper and Scissors
    let playerChoice = prompt("Choose Rock, Paper or Scissors");

    playerChoice = playerChoice.toUpperCase();

    //We should also get the computer's choice in order to determine who won
    let computerChoice = getComputerChoice();


    //Here we get the player's choice through the switch statement and compare them to the computer's choice and use if else statements to determine the winner
    switch (playerChoice) {
        case "ROCK":
            if (computerChoice === "rock") {
                console.log("It's a tie!");
                gameResult.textContent = "It's a tie!";
                playerResult.textContent += `${playerChoice} `;
                computerResult.textContent = `${computerChoice} `;


                break;
            } else if (computerChoice === "scissors") {
                console.log("You win!");
                gameResult.textContent = "You win!";
                playerResult.textContent = `${playerChoice} `;
                computerResult.textContent = `${computerChoice} `;
                humanScore++;
                yourScore.textContent = humanScore;
                break;
            } else {
                console.log("You lose!");
                gameResult.textContent = "You lose!";;
                playerResult.textContent = `${playerChoice} `;
                computerResult.textContent = `${computerChoice} `;
                computerScore++;
                enemyScore.textContent = computerScore;
                break;
            }

        case "SCISSORS":
            if (computerChoice === "rock") {
                console.log("You lose!");
                playerResult.textContent = `${playerChoice} `;
                computerResult.textContent = `${computerChoice} `;
                gameResult.textContent = "You lose!";
                computerScore++
                enemyScore.textContent = computerScore;
                break;
            } else if (computerChoice === "scissors") {
                console.log("It's a tie!");
                playerResult.textContent = `${playerChoice} `;
                computerResult.textContent = c`${computerChoice} `;
                gameResult.textContent = "It's a tie!";
                break;
            } else {
                console.log("You win!");
                playerResult.textContent = `${playerChoice} `;
                computerResult.textContent = `${computerChoice} `;
                gameResult.textContent = "You win!";
                humanScore++;
                yourScore.textContent = humanScore;
                break;
            }

        case "PAPER":
            if (computerChoice === "rock") {
                console.log("You win!");
                gameResult.textContent = "You win!";
                playerResult.textContent = `${playerChoice} `;
                computerResult.textContent = `${computerChoice} `;
                humanScore++;
                yourScore.textContent = humanScore;
                break;
            } else if (computerChoice === "scissors") {
                console.log("You lose!");
                gameResult.textContent = "You lose!";
                playerResult.textContent = `${playerChoice} `;
                computerResult.textContent = `${computerChoice} `;
                computerScore++;
                enemyScore.textContent = computerScore;
                break;
            } else {
                console.log("It's a tie!");
                playerResult.textContent = `${playerChoice} `;
                computerResult.textContent = `${computerChoice} `;
                gameResult.textContent = "It's a tie!";
                break;
            }
        //In case the player tries to enter something that isn't rock paper or scissors, throw an error at them.
        default:
            gameResult.textContent = "Please enter a valid value, which is Rock, Paper or Scissors";
            break;
    }

}

//We need to run a loop that plays the game 5 times
//lastly we run the function as soon as the game is loaded
function playFiveRounds() {
    for (let i = 0; i < 5; i++) {
        getHumanChoiceAndPlayRound();
    }
}

startGame.addEventListener('click', playFiveRounds);

