/* Logic to get computer choice 
    create a variable that stores rock,paper,scissors as an array
    create a function that takes this array and returns a random element
    display the outcome in the console for testing
*/

/* Logic to get human choice 
    create a variable that prompts the player for an input, and stores that input
    create a function that takes the user's input
*/

/* Variables to keep track of player scores */

/* Logic to play a single round 
    create a function that takes the human & computer choices as arguments
    have the function return a string value representing the round winner
    i.e., "You win! Rock beats Scissors"
    if player picks rock and pc rock, "It's a tie"
    if player picks rock and pc paper, "You lose! Paper beats rock"
    if player picks rock and pc scissors, "You win! Rock beats Scissors"
    create similar conditions for when player picks paper or scissors
    create a new variable that uses a template literal value to show the round's result
*/

/* Logic to play the entire game 
    create a function that takes the function for playing a single round and calls it 5 times
    (for a 5-round game)
    
*/

/* logic for computer choice */
/*const compArray = ['rock','paper','scissors'];*/


function getComputerChoice() {
    let compArray = ['rock','paper','scissors'];

    /* get random index value */
    const randomIndex = Math.floor(Math.random() * compArray.length);
    
    /* get random item */
    const item = compArray[randomIndex];
    
    return item;
}

/*const compValue = getComputerChoice();
console.log (compValue);*/

/* logic for human choice */
function getHumanChoice() {
    const playerChoice = prompt('Enter rock,paper,or scissors');
    return playerChoice.toLowerCase();
}

/*const humanValue = getHumanChoice();
console.log (humanValue);*/


/* variables to keep score */
let humanScore = 0;
let computerScore = 0;

/* logic to play a single round */
function playRound(humanResult,compResult) {
    let result;
    /* player picks rock */
    if ((humanResult == 'rock') && (compResult == 'rock')) {
        console.log("It's a tie!");
        result = "DRAW";
        return result;
    }

    else if ((humanResult == 'rock') && (compResult == 'paper')) {
        console.log("You lose! Paper beats Rock");
        result = "C";
        return result;
    }

    else if ((humanResult == 'rock') && (compResult == 'scissors')) {
        console.log("You win! Rock beats Scissors");
        result = "H";
        return result;
    };

    /* player picks paper */
    if ((humanResult == 'paper') && (compResult == 'paper')) {
        console.log("It's a tie!");
        result = "DRAW";
        return result;
    }

    else if ((humanResult == 'paper') && (compResult == 'scissors')) {
        console.log("You lose! Scissors beats Paper");
        result = "C";
        return result;
    }

    else if ((humanResult == 'paper') && (compResult == 'rock')) {
        console.log("You win! Paper beats Rock");
        result = "H";
        return result;
    };

    /* player picks scissors */
    if ((humanResult == 'scissors') && (compResult == 'scissors')) {
        console.log("It's a tie!");
        result = "DRAW";
        return result;
    }

    else if ((humanResult == 'scissors') && (compResult == 'rock')) {
        console.log("You lose! Rock beats Scissors");
        result = "C";
        return result;
    }

    else if ((humanResult == 'scissors') && (compResult == 'paper')) {
        console.log("You win! Scissors beats Paper");
        result = "H";
        return result;
    };
//write code to increment the humanScore or CompScore based on round winner//
}

//console.log(playRound(getHumanChoice(),getComputerChoice()));//

/*Consider creating a function for the game score. To keep track of the score & increment accordingly per round played.
Maybe have it reside in the playRound function. Also, delete the console.log template literal lines*/

function playGame() {

    for (let i=0; i<5; i++) {

    let winner = playRound(getHumanChoice(),getComputerChoice());
    /*getComputerChoice();
    getHumanChoice();*/

    if (winner == "H") 
        {++humanScore; console.log (`Human:${humanScore} PC:${computerScore}`)}

    else if (winner == "C") 
        {++computerScore; console.log (`Human:${humanScore} PC:${computerScore}`)}
    
    else {console.log("DRAW!")};
};
};

playGame();




