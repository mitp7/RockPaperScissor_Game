// Initialize player score to zero
let playerScore = 0;
// Get all of the required elements
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const options = document.getElementsByClassName('selector')[0];
const gameScore = document.getElementById('score');
const inGame = document.getElementsByClassName('in-game')[0];

// Function which randomly chooses a option from either rock, paper, or scissors which represents the computers choice
function computerChoice() {
    const choices = ['paper', 'rock', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    const compChoice = choices[randomChoice];
    return compChoice;
}

// Funcition which determines the outcome of that round
function game(playerChoice){
    const compChoice = computerChoice();
    // Concatenates the players choice with the computers to be used in the switch statement
    const overallChoice = playerChoice + compChoice;

    // Switch statement to determine the players outcome at each round
    switch (overallChoice) {
        // Player Wins
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            // Update score
            playerScore += 1;
            // Hide the options shown in the beginning
            options.style.display = 'none';
            // Show the options chosen and the winners
            inGame.style.display = 'block';
            inGame.innerHTML = `
            <div class="final-selection">
                <div class="player-pick">
                    <h1 class="player-title">YOU PICKED</h1>
                    <div class="background-icon2 player-${playerChoice} player-${playerChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${playerChoice}.svg" id="${playerChoice}" alt="${playerChoice}">
                        </div>
                    </div>
                </div>

                <div class="play-again">
                    <h1>YOU WIN</h1>
                    <button class="play-btn">Play Again</button>
                </div>

                <div class="computer-pick">
                    <h1 class="comp-title">THE HOUSE PICKED</h1>
                    <div class="background-icon2 computer-${compChoice} computer-${compChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${compChoice}.svg" id="${compChoice}" alt="${compChoice}">
                        </div>
                    </div>
                </div>
            </div>
            `
            //Update score 
            gameScore.innerHTML = playerScore;
            break;
        
        // Player Loses
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            options.style.display = 'none';
            inGame.style.display = 'block';
            inGame.innerHTML = `
            <div class="final-selection">
                <div class="player-pick">
                    <h1 class="player-title">YOU PICKED</h1>
                    <div class="background-icon2 player-${playerChoice} player-${playerChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${playerChoice}.svg" id="${playerChoice}" alt="${playerChoice}">
                        </div>
                    </div>
                </div>

                <div class="play-again">
                    <h1>YOU LOSE</h1>
                    <button class="play-btn">Play Again</button>
                </div>

                <div class="computer-pick">
                    <h1 class="comp-title">THE HOUSE PICKED</h1>
                    <div class="background-icon2 computer-${compChoice} computer-${compChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${compChoice}.svg" id="${compChoice}" alt="${compChoice}">
                        </div>
                    </div>
                </div>
            </div>
            `
            break;

        // Player Ties
        case 'scissorsscissors':
        case 'paperpaper':
        case 'rockrock':
            options.style.display = 'none';
            inGame.style.display = 'block';
            inGame.innerHTML = `
            <div class="final-selection">
                <div class="player-pick">
                    <h1 class="player-title">YOU PICKED</h1>
                    <div class="background-icon2 player-${playerChoice} player-${playerChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${playerChoice}.svg" id="${playerChoice}" alt="${playerChoice}">
                        </div>
                    </div>
                </div>

                <div class="play-again">
                    <h1>IT'S A DRAW</h1>
                    <button class="play-btn">Play Again</button>
                </div>

                <div class="computer-pick">
                    <h1 class="comp-title">THE HOUSE PICKED</h1>
                    <div class="background-icon2 computer-${compChoice} computer-${compChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${compChoice}.svg" id="${compChoice}" alt="${compChoice}">
                        </div>
                    </div>
                </div>
            </div>
            `
            break;
    }

    // Get the button which restarts the game
    const playbtn = document.querySelector(".play-btn");
    // Upon click show the starting 3 options again and hide the outcome of the previous round
    playbtn.addEventListener("click", () => {
        options.style.display = 'grid';
        inGame.style.display = 'none';
    });
}

// Get the modal elements
const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

// Listen for open modal click
modalBtn.addEventListener('click', openModal);
// Listen for close modal click 
closeBtn.addEventListener('click', closeModal);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}
// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// Main function to start the game
function main () {
    // Listens for a click on the paper icon
    paper.addEventListener('click', () => {
        game('paper');
    })

    // Listens for a click on the rock icon
    rock.addEventListener('click', () => {
        game('rock');
    })

    // Listens for a click on the scissors icon
    scissors.addEventListener('click', () => {
        game('scissors');
    })
}
main();
