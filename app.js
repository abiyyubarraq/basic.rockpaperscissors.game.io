const game = ()=> {
    let pScore = 0;
    let cScore  = 0;
    

    const startGame = ()=> {
        const startBtn = document.querySelector('.roll')
        const introScrn = document.querySelector('.intro')
        const match = document.querySelector('.match')

        startBtn.addEventListener('click', () => {
            introScrn.classList.add('fadeOut')
            match.classList.add('fadeIn')
        })
    }

    const playGame = ()=> {
        const option = document.querySelectorAll('.option button')
        const playerHand = document.querySelector ('.player_hand')     
        const computerHand = document.querySelector ('.computer_hand')
        
        const computerOption = ['rock', 'paper', 'scissors']

        option.forEach (options => {
            options.addEventListener('click', function () {
                const computerNumb = Math.floor(Math.random()*3)
                const computerChoice = computerOption[computerNumb]
                console.log(computerChoice)
                playerHand.src = `./assets/${this.textContent}.png`
                computerHand.src = `./assets/${computerChoice}.png`
                compareHand(this.textContent, computerChoice)
            })

            
        })

        const updateScore = () => {
            const playerScore = document.querySelector(".player_score p");
            const computerScore = document.querySelector(".computer_score p");
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
          };
        
    const compareHand =  (playerChoice,computerChoice) => {
        const winner = document.querySelector('.winner')
        //check for seri
        if (playerChoice === computerChoice){
            winner.textContent = 'SERI';
            return;
        }
        //Check for Rock
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++
          updateScore()
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++
          updateScore()
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++
          updateScore()
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++
          updateScore();
          return;
        }
      }
    };
 
    }
    

    startGame();
    playGame()
}

game();