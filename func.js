const scoreCount = document.querySelector("#scoreCount");
const paperBtn = document.querySelector("#paper")
const scissorBtn = document.querySelector("#scissors");
const rockBtn = document.querySelector("#rock");


const user_choices = document.querySelectorAll(".choice");

const resultScreen = document.querySelector(".result");
const gameScreen = document.querySelector(".gameScreen");
const resultMessage = document.querySelector(".resultMessage");
const playAgain = document.querySelector(".playAgain");
const userChoiceImg = document.querySelector(".userChoiceImg img");
const botChoiceImg = document.querySelector(".botChoiceImg img");
const userText = document.querySelector(".userText");
const botText = document.querySelector(".botText");



paperBtn.addEventListener("click", () => {
    userChoiceImg.src = "/icons/paper.png";
    userText.innerHTML = "PAPER"

})
rockBtn.addEventListener("click", () => {
  userChoiceImg.src = "/icons/rock.png";
  userText.innerHTML = "ROCK";
});
scissorBtn.addEventListener("click", () => {
  userChoiceImg.src = "/icons/scissors.png";
  userText.innerHTML = "SCISSORS"
}); 



const weapons = {
    rock: {
        wins: "scissors"
    },
    scissors: {
        wins: "paper"
    },
    paper: {
        wins: "rock"
    }
}

let count = 0;
scoreCount.innerHTML = count;


user_choices.forEach((choiceBtn) => {
  choiceBtn.addEventListener("click", (event) => {

    resultScreen.classList.remove("hidden")
    gameScreen.classList.add("hidden")


    let possibilities = Object.keys(weapons);
    console.log(possibilities)
    userChoice = choiceBtn.id;
    botChoice = possibilities[Math.floor(Math.random() * possibilities.length)];

    //
if(botChoice =="rock"){
  botChoiceImg.src = "/icons/rock.png";
  botText.innerHTML = "ROCK"

}else if(botChoice == "paper"){
  botChoiceImg.src = "/icons/paper.png";
  botText.innerHTML = "PAPER"
}else{
  botChoiceImg.src = "/icons/scissors.png";
  botText.innerHTML = "SCISSORS"
}
    //

    if(userChoice === botChoice){
      resultMessage.innerHTML = "THIS IS A DRAW" 
        console.log ("this is draw ", `BOT: ${botChoice} -`, `- PLAYER: ${userChoice}` )
        
    }else if(weapons[userChoice].wins == botChoice){
      resultMessage.innerHTML = "YOU WON";
      count+=5;
      console.log(count)
      scoreCount.innerHTML = count;
        console.log("YOU WON", `BOT: ${botChoice} -`, `- PLAYER: ${userChoice}`)
    }else{
      resultMessage.innerHTML = "YOU LOST"
      count-=5;
      console.log(count)
      scoreCount.innerHTML = count;
        console.log(
          "YOU LOST",
          `BOT: ${botChoice} -`,
          `- PLAYER: ${userChoice}`
        );
    }


  });
});

// SIR MARTIN ---
// paperBtn.addEventListener("click", () => {
//   console.log("USER: paper");
//   let botChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
//   console.log(botChoice);

//   if(){

//   }

// });

// scissorsBtn.addEventListener("click", () => {
//   console.log("USER: scissor");
//   let botChoice = Math.floor(Math.random() * possibilities.length);
//   console.log(possibilities[botChoice]);
// });

// rockBtn.addEventListener("click", () => {
//   console.log("USER: rock");
//   let botChoice = Math.floor(Math.random() * possibilities.length);
//   console.log(possibilities[botChoice]);
// });



playAgain.addEventListener("click", ()=>{
    resultScreen.classList.add("hidden")
    gameScreen.classList.remove("hidden")
})






















tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  }
}

