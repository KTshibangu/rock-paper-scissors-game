const scoreEl = document.querySelector('.score');
const choiceContainer = document.querySelector('.choice-container');
const resultContainer = document.createElement('div');
resultContainer.classList.add('result-container');    

const getRandomComputerResult = () => {
    const options = ["paper", "scissors", "rock"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

const hasPlayerWonTheRound = (player, computer) => {
    return (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    )
}

let playerScore = 0;

const playAgain = () => {
    choiceContainer.classList.remove('hide'); 
    resultContainer.style.display = 'none'; 
}

const getRoundResults = (userOption) => {
    const computerResult = getRandomComputerResult();

    if(hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++
        return stringToInject =
        `<div class="picks-container">
            <div class="user-pick">
                <div class="${userOption}-pick">
                    <img src="images/icon-${userOption}.svg">
                </div>
                <p>YOU PICKED</p>
            </div>
            <div class="computer-pick">
                <div class="${computerResult}-pick">
                    <img src="images/icon-${computerResult}.svg">
                </div>
                <p>THE HOUSE PICKED</p>
            </div>
        </div>
      <div class="outcome">YOU WIN</div>
      <button class="play-again" onclick="playAgain()">PLAY AGAIN</button>`;
    } else if (userOption === computerResult) {
        return stringToInject =
        `<div class="picks-container">
        <div class="user-pick">
          <div class="${userOption}-pick">
            <img src="images/icon-${userOption}.svg">
          </div>
          <p>YOU PICKED</p>
        </div>
        <div class="computer-pick">
          <div class="${computerResult}-pick">
            <img src="images/icon-${computerResult}.svg">
          </div>
          <p>THE HOUSE PICKED</p>
        </div>
      </div>
      <div class="outcome">IT'S A TIE</div>
      <button class="play-again" onclick="playAgain()">PLAY AGAIN</button>`;
    } else {
        playerScore--
        return stringToInject =
        `<div class="picks-container">
        <div class="user-pick">
          <div class="${userOption}-pick">
            <img src="images/icon-${userOption}.svg">
          </div>
          <p>YOU PICKED</p>
        </div>
        <div class="computer-pick">
          <div class="${computerResult}-pick">
            <img src="images/icon-${computerResult}.svg">
          </div>
          <p>THE HOUSE PICKED</p>
        </div>
      </div>
      <div class="outcome">YOU LOSE</div>
      <button class="play-again" onclick="playAgain()">PLAY AGAIN</button>`;
    }
}

const showResults = (userOption) => {
    const gameContainer = document.querySelector('.game');
    choiceContainer.classList.add('hide');
    resultContainer.innerHTML = getRoundResults(userOption);
    resultContainer.style.display = 'flex';
    gameContainer.append(resultContainer);
    scoreEl.innerText = playerScore;
}

const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const rockBtn = document.querySelector('.rock');

rockBtn.addEventListener("click", function () {
    showResults("rock");
  });
  
paperBtn.addEventListener("click", function () {
    showResults("paper");
  });
  
scissorsBtn.addEventListener("click", function () {
    showResults("scissors");
  });


