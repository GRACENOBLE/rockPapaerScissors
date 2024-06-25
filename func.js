const scoreCount = document.querySelector("#scoreCount");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const rockBtn = document.querySelector("#rock");
const result = document.querySelector("#result");
const game = document.querySelector('#game')
const playAgain = document.querySelector("#playAgain");
const outcome = document.querySelector('#outcome')

let count = 1;
scoreCount.innerHTML = count;

function showresult() {
  result.style.display = "flex";
  game.style.display = "none";
}

function hideresult() {
  result.style.display = "none";
  game.style.display = "flex";
}

const possibilities = ["rock", "paper", "scissor"];
let userChoice = "";
let botChoice = "";

function returnWinner(userChoice) {
  botChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
  console.log(`User:${userChoice}<<<<<>>>>>Bot: ${botChoice}`);

  if (userChoice == botChoice) {
    console.log("Draw");
  } else if (userChoice == "paper") {
    if (botChoice == "rock") {
      console.log("win");
      count++;
      outcome.innerHTML = "You Won"
      scoreCount.innerHTML = count;
    } else {
      outcome.innerHTML = "You Lost";
      console.log("lose");
    }
  } else if (userChoice == "rock") {
    if (botChoice == "scissor") {
      console.log("win");
      count++;
      outcome.innerHTML = "You Won";
      scoreCount.innerHTML = count;
    } else {
      outcome.innerHTML = "You Lost";
      console.log("lose");
    }
  } else {
    if (botChoice == "paper") {
      console.log("win");
      count++;
      outcome.innerHTML = "You Won";
      scoreCount.innerHTML = count;
    } else {
      outcome.innerHTML = "You Lost";
      console.log("lose");
    }
  }
  showresult()
}

//noble
paperBtn.addEventListener("click", () => {
  userChoice = "paper";
  returnWinner(userChoice);
});
rockBtn.addEventListener("click", () => {
  userChoice = "rock";
  returnWinner(userChoice);
});
scissorBtn.addEventListener("click", () => {
  userChoice = "scissor";
  returnWinner(userChoice);
});

playAgain.addEventListener("click", () => {
  hideresult();
});
