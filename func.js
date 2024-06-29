const scoreCount = document.querySelector("#scoreCount");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const rockBtn = document.querySelector("#rock");
const result = document.querySelector("#result");
const game = document.querySelector("#game");
const playAgain = document.querySelector("#playAgain");
const outcome = document.querySelector("#outcome");
const UserChoice = document.querySelector("#userChoice");
const BotChoice = document.querySelector("#botChoice");
const rules = document.querySelector("#rules");
const Rules = document.querySelector("#Rules");
const Hiderules = document.querySelector("#hiderules");
const houseCount = document.querySelector("#houseCount");

let count = 0;
scoreCount.innerHTML = count;
let loses = 0;
houseCount.innerHTML = loses;

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
  if (userChoice == "rock") {
    UserChoice.innerHTML = `<div class="bg-red-400 w-32 h-32 rounded-full grid place-items-center">
        <span class="bg-white w-28 h-28 rounded-full grid place-items-center">
          <img src="./icons/rock.png" alt="" />
        </span>
      </div>`;
  } else if (userChoice == "paper") {
    UserChoice.innerHTML = `<div class="bg-blue-400 w-32 h-32 rounded-full grid place-items-center">
        <span class="bg-white w-28 h-28 rounded-full grid place-items-center">
          <img src="./icons/paper.png" alt="" />
        </span>
      </div>`;
  } else {
    UserChoice.innerHTML = `<div class="bg-orange-400 w-32 h-32 rounded-full grid place-items-center">
        <span class="bg-white w-28 h-28 rounded-full grid place-items-center">
          <img src="./icons/scissors.png" alt="" />
        </span>
      </div>`;
  }

  if (botChoice == "rock") {
    BotChoice.innerHTML = `<div class="bg-red-400 w-32 h-32 rounded-full grid place-items-center">
        <span class="bg-white w-28 h-28 rounded-full grid place-items-center">
          <img src="./icons/rock.png" alt="" />
        </span>
      </div>`;
  } else if (botChoice == "paper") {
    BotChoice.innerHTML = `<div class="bg-blue-400 w-32 h-32 rounded-full grid place-items-center">
        <span class="bg-white w-28 h-28 rounded-full grid place-items-center">
          <img src="./icons/paper.png" alt="" />
        </span>
      </div>`;
  } else {
    BotChoice.innerHTML = `<div class="bg-orange-400 w-32 h-32 rounded-full grid place-items-center">
        <span class="bg-white w-28 h-28 rounded-full grid place-items-center">
          <img src="./icons/scissors.png" alt="" />
        </span>
      </div>`;
  }

  if (userChoice == botChoice) {
    console.log("Draw");
    outcome.innerHTML = "Draw";
  } else if (userChoice == "paper") {
    if (botChoice == "rock") {
      console.log("win");
      count++;
      outcome.innerHTML = "You Won";
    } else {
      console.log("lose");
      loses++;
      outcome.innerHTML = "You Lost";
    }
  } else if (userChoice == "rock") {
    if (botChoice == "scissor") {
      console.log("win");
      count++;
      outcome.innerHTML = "You Won";
    } else {
      loses++;
      outcome.innerHTML = "You Lost";
      console.log("lose");
    }
  } else {
    if (botChoice == "paper") {
      console.log("win");
      count++;
      outcome.innerHTML = "You Won";
    } else {
      loses++;
      outcome.innerHTML = "You Lost";
      console.log("lose");
    }
  }
  scoreCount.innerHTML = count;
  houseCount.innerHTML = loses;
  showresult();
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

//rules
function showrules() {
  Rules.style.display = "flex";
}

function hiderules() {
  Rules.style.display = "none";
}

rules.addEventListener("click", () => {
  showrules();
});

Hiderules.addEventListener("click", () => {
  hiderules();
});
