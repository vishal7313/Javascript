const playerS = document.getElementById('playerScore');
const computerS = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const playerMoves = document.querySelector('.moves i');
const computerMoves = document.querySelector('.computer i');
//An array to hold rock, paper and scissor font awesome. 
let RPS = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const toggleText = document.getElementById('toggleText');
const resultText = document.getElementById('resultText')

const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click',(e)=>{
            let clickedBtn = e.target.className;
            playerMoves.className = clickedBtn;
            let randomNum = Math.floor(Math.random() * RPS.length);
            computerMoves.className = RPS[randomNum];

            //if the same is a tie
            if(playerMoves.className === computerMoves.className) {
                playerS.innerHTML = playerS.innerHTML;
                computerS.innerHTML = computerS.innerHTML;
                resultText.innerHTML = "It's a tie.";
                resultText.style.color = 'yellow';
                toggleText.innerHTML = toggleText.innerHTML;
                toggleText.style.color = 'yellow';
            }
            else if(playerMoves.className === RPS[0] && computerMoves.className === RPS[1] ||
                    playerMoves.className === RPS[1] && computerMoves.className === RPS[2] ||
                    playerMoves.className === RPS[2] && computerMoves.className === RPS[0]) {
                computerS.innerHTML = Number(computerS.innerHTML) + 1;
                resultText.innerHTML = "Computer Wins!";
                resultText.style.color = 'red';
                toggleText.innerHTML = toggleText.innerHTML;
                toggleText.style.color = 'red';
            }
            else if(playerMoves.className === RPS[0] && computerMoves.className === RPS[2] || 
                    playerMoves.className === RPS[1] && computerMoves.className === RPS[0] ||
                    playerMoves.className === RPS[2] && computerMoves.className === RPS[1]) {
                playerS.innerHTML = Number(playerS.innerHTML) + 1;
                resultText.innerHTML = "Player Wins!";
                resultText.style.color = 'green';
                toggleText.innerHTML = toggleText.innerHTML;
                toggleText.style.color = 'green';
            }
        });
    })
}

// Calling the function.
game();
// This function contains all the game logic.