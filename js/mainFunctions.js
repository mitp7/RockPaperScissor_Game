let playerScore = 0;
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const options = document.getElementsByClassName('selector')[0];
const gameScore = document.getElementById('score');

const inGame = document.getElementsByClassName('in-game')[0];


function computerChoice() {
    const choices = ['paper', 'rock', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    const compChoice = choices[randomChoice];
    return compChoice;
}

function game(playerChoice){
    //const compChoice = computerChoice();
    const compChoice = 'scissors';
    const overallChoice = playerChoice + compChoice;
    options.style.display = 'none';

    switch (overallChoice) {
        // Player Wins
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            playerScore += 1;

            inGame.innerHTML = `
            <div class="final-selection">
                <div class="player-pick">
                    <h1 class="player-title">YOU PICKED</h1>
                    <div class="background-icon background-${playerChoice}">
                        <div class="selection">
                            <img src = "images/icon-${playerChoice}.svg" id="${playerChoice}" alt="${playerChoice}">
                        </div>
                    </div>
                </div>

                <div class="computer-pick">
                    <h1 class="comp-title">THE HOUSE PICKED</h1>
                    <div class="background-icon background-${compChoice}">
                        <div class="selection">
                            <img src = "images/icon-${compChoice}.svg" id="${compChoice}" alt="${compChoice}">
                        </div>
                    </div>
                </div>
            </div>
            `
            //Update score 
            gameScore.innerHTML = playerScore;
            break;
    }
}

function main () {
    paper.addEventListener('click', () => {
        game('paper');
    })

    rock.addEventListener('click', () => {
        game('rock');
    })

    scissors.addEventListener('click', () => {
        game('scissors');
    })
}


// Get rules modal element 
const modal = document.getElementById('simpleModal');
// Get button which opens the modal
const modalBtn = document.getElementById('openBtn');
// Get button which closes the modal
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

main();