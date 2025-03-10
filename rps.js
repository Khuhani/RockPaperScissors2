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
const compArray = ['rock','paper','scissors'];

function getComputerChoice(arr) {
    /* get random index value */
    const randomIndex = Math.floor(Math.random() * arr.length);
    
    /* get random item */
    const item = arr[randomIndex];
    
    return item;
}

/*getComputerChoice(compArray);
console.log (getComputerChoice(compArray));*/
const compResult = getComputerChoice(compArray);
console.log (compResult);

/* logic for human choice */
function getHumanChoice (human) {
    return human;
}

const playerChoice = prompt('Enter rock,paper,or scissors');
const humanResult = getHumanChoice(playerChoice.toLowerCase());
console.log (humanResult);
/*getHumanChoice(playerChoice.toLowerCase());
console.log (getHumanChoice(playerChoice.toLowerCase()));*/

/* variables to keep score */
let humanScore = 0;
let computerScore = 0;


/* logic to play a single round */
function playRound(humanResult,compResult) {
    /* player picks rock */
    if ((humanResult == 'rock') && (compResult == 'rock')) {
        console.log("It's a tie!")
    }

    else if ((humanResult == 'rock') && (compResult == 'paper')) {
        console.log("You lose! Paper beats Rock")
    }

    else if ((humanResult == 'rock') && (compResult == 'scissors')) {
        console.log("You win! Rock beats Scissors")
    };

    /* player picks paper */
    if ((humanResult == 'paper') && (compResult == 'paper')) {
        console.log("It's a tie!")
    }

    else if ((humanResult == 'paper') && (compResult == 'scissors')) {
        console.log("You lose! Scissors beats Paper")
    }

    else if ((humanResult == 'paper') && (compResult == 'rock')) {
        console.log("You win! Paper beats Rock")
    };

    /* player picks scissors */
    if ((humanResult == 'scissors') && (compResult == 'scissors')) {
        console.log("It's a tie!")
    }

    else if ((humanResult == 'scissors') && (compResult == 'rock')) {
        console.log("You lose! Rock beats Scissors")
    }

    else if ((humanResult == 'scissors') && (compResult == 'paper')) {
        console.log("You win! Scissors beats Paper")
    };
}

/*playRound(humanResult,compResult);*/

/*Consider creating a function for the game score. To keep track of the score & increment accordingly per round played.
Maybe have it reside in the playRound function. Also, delete the console.log template literal lines*/

function playGame() {
    let winner = playRound(humanResult,compResult);

    if (winner === 
        "You win! Rock beats Scissors" ||
        "You win! Paper beats Rock" ||
        "You win! Scissors beats Paper") 
        {++humanScore;
            console.log (`Human:${humanScore} PC:${computerScore}`)}

    else if (winner === 
        "You lose! Paper beats Rock" ||
        "You lose! Scissors beats Paper" ||
        "You lose! Rock beats Scissors") 
        {++computerScore;
            console.log (`Human:${humanScore} PC:${computerScore}`)}
    
    else {console.log("DRAW!")};
}

playGame();



