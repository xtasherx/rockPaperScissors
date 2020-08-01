
// DOM Selection
const btn = document.querySelector('.btn-primary');
const cardText = document.querySelector('.card-text');
const card = document.querySelector('.card');

// create an arr to store the options for the computer
const compChoices = ["rock", "paper", "scissors"];

// create variables to store the ammounts of wins, losses, and ties
let wins = 0;
let losses = 0;
let ties = 0;
let round = 0;

// event listener for button to start game
btn.addEventListener('click', () => {

    // for loop that iterates * 10

    for (let i = 0; i < 5; i++) {

        // prompt to ask the player their guess and store it in a variable called playerGuess
        const playerGuess = prompt('Type rock, paper, or scissors to play');

        // program randomly makes a choice from the arr and stores it in randomNumber 

        const randomNumber = compChoices[Math.floor(Math.random() * compChoices.length)];

        // function with if statments to evaluate the player guess and computer guess to decide who wins the round and add the tally to it's respective variable. 
        if (playerGuess === '') {
            alert(`Please provide an answer!`)
        } else if (playerGuess.toLowerCase() !== 'scissors' && playerGuess.toLowerCase() !== 'paper' && playerGuess.toLowerCase() !== 'rock') {
            alert(`You did not provide a valid answer, please try again.`)
        }

        function winDecider(c0, c1, c2) {
            if (playerGuess.toLowerCase() === c0 && randomNumber === c0) {
                ties++;
                alert(`The computer chose ${c0}, you tied`);
            } else if (playerGuess.toLowerCase() === c0 && randomNumber === c1) {
                losses++;
                alert(`The computer chose ${c1}, you lost.`);
            } else if (playerGuess.toLowerCase() === c0 && randomNumber === c2) {
                wins++
                alert(`The computer chose ${c2}, you won!`)
            }

        }

        // call functions
        winDecider(compChoices[0], compChoices[1], compChoices[2]);
        winDecider(compChoices[2], compChoices[0], compChoices[1]);
        winDecider(compChoices[1], compChoices[2], compChoices[0])

    }

    round++;

    cardText.innerHTML += `
            <strong>Round ${round}</strong>
            </br>
            Wins: ${wins} 
            </br>
            Losses: ${losses}
            </br> 
            Ties: ${ties}
            <hr>
            `

    btn.innerHTML = `Play Again!`
})