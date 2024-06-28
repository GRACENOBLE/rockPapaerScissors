const scoreCount = document.querySelector("#scoreCount");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const rockBtn = document.querySelector("#rock");
const result = document.getElementById('result');
const word_result = document.getElementById('word_result');
const gameplayer = document.getElementById('gameplayer');

let count = scoreCount.textContent;
let score = Number(count);

scoreCount.innerHTML = score;

const possibilities = ["rock", "paper", "scissor"];
let userChoice = "";
let botChoice = "";

function returnWinner(userChoice) {
  botChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
  console.log(`User:${userChoice} <<<<<>>>>> Bot: ${botChoice}`);

  if (userChoice === botChoice) {
    console.log("Draw");
    word_result.innerHTML = "THAT WAS A DRAW 🤝";

  } else if (userChoice === "paper") {
    if (botChoice === "rock") {
      console.log("win");
      word_result.innerHTML = "YOU WIN 🏆";
      score++;
      scoreCount.innerHTML = score;
    } else {
      console.log("lose");
      word_result.innerHTML = "YOU LOST 🤣";
    }
  } else if (userChoice === "rock") {
    if (botChoice === "scissor") {
      console.log("win");
      word_result.innerHTML = "YOU WIN 🏆";
      score++;
      scoreCount.innerHTML = score;
    } else {
      console.log("lose");
      word_result.innerHTML = "YOU LOST 🤣";
    }
  } else {
    if (botChoice === "paper") {
      console.log("win");
      word_result.innerHTML = "YOU WIN 🏆";
      score++;
      scoreCount.innerHTML = score;
    } else {
      console.log("lose");
      word_result.innerHTML = "YOU LOST 🤣";
    }
  }


  const HumanImageChoice = document.getElementById('HumanImageChoice');
  if (userChoice === "paper") {
    HumanImageChoice.src = '/icons/paper.png';
  } else if (userChoice === "scissor") {
    HumanImageChoice.src = '/icons/scissors.png';
  } else if (userChoice === "rock") {
    HumanImageChoice.src = '/icons/rock.png';
  }

  const BotImageChoice = document.getElementById('BotImageChoice');
  if (botChoice === "paper") {
    BotImageChoice.src = '/icons/paper.png';
  } else if (botChoice === "scissor") {
    BotImageChoice.src = '/icons/scissors.png';
  } else if (botChoice === "rock") {
    BotImageChoice.src = '/icons/rock.png';
  }


  result.classList.remove("hidden");
}


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

gameplayer.addEventListener('click', () => {
  result.classList.add("hidden");
});
