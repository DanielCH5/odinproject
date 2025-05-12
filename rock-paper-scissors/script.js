//Rock paper scissors project
//The game will be played against the computer

//The computer will randomly return rock, paper or scissors


//First we need a way to generate something random that can be used to select between the three choices.
function getComputerChoice(){
    //The choice variables stores a random number between 0 and 100.
    let number = Math.floor(Math.random() * 100) + 1;
    let choice = "";
    //We can then make it conditional to choose rock, paper or scissors based on the number
    //An example of this could be using 0-33 = Rock
    if (number <= 33){
        choice = "rock";
        console.log("test")
        return choice;
    } else if (number >= 33 && number <= 66) {
        choice = "paper";
        console.log("test");
        return choice;
    } else {
        choice = "scissors";
        console.log("test3")
        return choice;
    }

}