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

let playerChoiceDisplay = document.querySelector("#player-choice");
let computerChoiceDisplay = document.querySelector("#computer-choice");
let resultDisplay = document.querySelector('#result');
let playerScore = document.querySelector("#human-score");
let pcScore = document.querySelector("#comp-score");
let outcomeDisplay = document.querySelector('#outcome');
let buttons = document.querySelectorAll("button");


/*logic for human choice*/
    buttons.forEach(btn =>btn.addEventListener("click",e =>
    {let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
    playRound(playerChoice,computerChoice);
    }
    ));


/*logic for computer choice*/
function getComputerChoice() {
    let compArray = ['rock','paper','scissors'];

    /* get random index value */
    const randomIndex = Math.floor(Math.random() * compArray.length);
    
    /* get random item */
    const item = compArray[randomIndex];
    return item;
};

/* variables to keep score */
let humanScore = 0;
playerScore.textContent = humanScore;

let computerScore = 0;
pcScore.textContent = computerScore;


/*logic to play a single round*/
function playRound(humanResult,compResult) {
    console.log(`You chose:${humanResult}`);
    console.log(`PC chose:${compResult}`);
    let result;
    /* player picks rock */
    if ((humanResult == 'rock') && (compResult == 'rock')) {
        resultDisplay.textContent = "It's a tie!";
        result = "DRAW";
        return result;
    }

    else if ((humanResult == 'rock') && (compResult == 'paper')) {
        resultDisplay.textContent = "You lose! Paper beats Rock";
        computerScore++;
        pcScore.textContent = computerScore;
        result = "C";
        return result;
    }

    else if ((humanResult == 'rock') && (compResult == 'scissors')) {
        resultDisplay.textContent = "You win! Rock beats Scissors";
        humanScore++;
        playerScore.textContent = humanScore;
        result = "H";
        return result;
    };

    /* player picks paper */
    if ((humanResult == 'paper') && (compResult == 'paper')) {
        resultDisplay.textContent = "It's a tie!";
        result = "DRAW";
        return result;
    }

    else if ((humanResult == 'paper') && (compResult == 'scissors')) {
        resultDisplay.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        pcScore.textContent = computerScore;
        result = "C";
        return result;
    }

    else if ((humanResult == 'paper') && (compResult == 'rock')) {
        resultDisplay.textContent = "You win! Paper beats Rock";
        humanScore++;
        playerScore.textContent = humanScore;
        result = "H";
        return result;
    };

    /* player picks scissors */
    if ((humanResult == 'scissors') && (compResult == 'scissors')) {
        resultDisplay.textContent = "It's a tie!";
        result = "DRAW";
        return result;
    }

    else if ((humanResult == 'scissors') && (compResult == 'rock')) {
        resultDisplay.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        pcScore.textContent = computerScore;
        result = "C";
        return result;
    }

    else if ((humanResult == 'scissors') && (compResult == 'paper')) {
        resultDisplay.textContent = "You win! Scissors beats Paper";
        humanScore++;
        playerScore.textContent = humanScore;
        result = "H";
        return result;
    };
};

function outcome() {
    let count = 0;
    buttons.forEach(btn => btn.addEventListener("click", function() {
    count++;
    console.log(count);
    if((count == 5) && (humanScore > computerScore)) {
        outcomeDisplay.textContent = "You win! Refresh page to play again."
    }
    else if((count == 5) && (computerScore > humanScore)) {
        outcomeDisplay.textContent = "You lose! Refresh page to play again."
    }
    else if((count == 5) && (humanScore == computerScore)) {
        outcomeDisplay.textContent = "It's a tie! Refresh page to play again."
    }
    else if(count > 5) {
        outcomeDisplay.textContent = "Sorry, won't count! Please refresh page to start new 5-round match."
    }
}));
};

outcome();





