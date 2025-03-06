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

/* Logic to play the entire game */

/* logic for computer choice */
const compArray = ['rock','paper','scissors'];

function getComputerChoice(arr) {
    /* get random index value */
    const randomIndex = Math.floor(Math.random() * arr.length);
    
    /* get random item */
    const item = arr[randomIndex];
    
    return item;
}

const compResult = getComputerChoice(compArray);
console.log (compResult);

/* logic for human choice */

function getHumanChoice (human) {
    return human;
}

const playerChoice = prompt('Enter rock,paper,or scissors');
const humanResult = getHumanChoice(playerChoice.toLowerCase());
console.log (humanResult);

/* variables to keep score */
let humanScore = 0;
let computerScore = 0;

/* logic to play a single round */
function playRound(humanResult,compResult) {
    /* player picks rock */
    if ((humanResult == 'rock') && (compResult == 'rock')) {
        console.log ("It's a tie!")
        console.log (`Player:${humanScore} PC:${computerScore}`)
    }

    else if ((humanResult == 'rock') && (compResult == 'paper')) {
        console.log ("You lose! Paper beats Rock")
        console.log (`Player:${humanScore} PC:${++computerScore}`)
    }

    else if ((humanResult == 'rock') && (compResult == 'scissors')) {
        console.log ("You win! Rock beats Scissors")
        console.log (`Player:${++humanScore} PC:${computerScore}`)
    };

    /* player picks paper */
    if ((humanResult == 'paper') && (compResult == 'paper')) {
        console.log ("It's a tie!")
        console.log (`Player:${humanScore} PC:${computerScore}`)
    }

    else if ((humanResult == 'paper') && (compResult == 'scissors')) {
        console.log ("You lose! Scissors beats Paper")
        console.log (`Player:${humanScore} PC:${++computerScore}`)
    }

    else if ((humanResult == 'paper') && (compResult == 'rock')) {
        console.log ("You win! Paper beats Rock")
        console.log (`Player:${++humanScore} PC:${computerScore}`)
    };

    /* player picks scissors */
    if ((humanResult == 'scissors') && (compResult == 'scissors')) {
        console.log ("It's a tie!")
        console.log (`Player:${humanScore} PC:${computerScore}`)
    }

    else if ((humanResult == 'scissors') && (compResult == 'rock')) {
        console.log ("You lose! Rock beats Scissors")
        console.log (`Player:${humanScore} PC:${++computerScore}`)
    }

    else if ((humanResult == 'scissors') && (compResult == 'paper')) {
        console.log ("You win! Scissors beats Paper")
        console.log (`Player:${++humanScore} PC:${computerScore}`)
    };
}

let roundResult = playRound(humanResult,compResult);

