const scoreCount = document.querySelector("#scoreCount");
const paperBtn = document.querySelector("#paper")
const scissorBtn = document.querySelector("#scissors");
const rockBtn = document.querySelector("#rock");


//const user_choices = document.querySelectorAll(".choice");

// console.log(user_choices);

scoreCount.innerHTML = 0;

const possibilities = ["rock", "paper", "scissor"];
let userChoice = "";
let botChoice = ""

function returnWinner(userChoice){
    botChoice = possibilities[Math.floor(Math.random() * possibilities.length)]
    console.log(`User:${userChoice}<<<<<>>>>>Bot: ${botChoice}`);

    if(userChoice == botChoice){
        console.log("Draw");
    }else if(userChoice == "paper"){
        if(botChoice == "rock"){
            console.log("win");
        }else{
            console.log("lose");
        }
    }else if(userChoice == "rock"){
        if (botChoice == "scissor") {
          console.log("win");
        } else {
          console.log("lose");
        }
    }else{
        if (botChoice == "paper") {
          console.log("win");
        } else {
          console.log("lose")
    }
}
}

//noble
paperBtn.addEventListener("click", () => {
    userChoice = "paper"
    returnWinner(userChoice);

})
rockBtn.addEventListener("click", () => {
  userChoice = "rock";
  returnWinner(userChoice);
});
scissorBtn.addEventListener("click", () => {
  userChoice = "scissor";
  returnWinner(userChoice);
});






// This is Shafic

// const weapons = {
//     rock: {
//         wins: "scissors"
//     },
//     scissors: {
//         wins: "paper"
//     },
//     paper: {
//         wins: "rock"
//     }
// }


// user_choices.forEach((choiceBtn) => {
//   choiceBtn.addEventListener("click", (event) => {

//     let possibilities = Object.keys(weapons);
//     userChoice = choiceBtn.id;
//     botChoice = possibilities[Math.floor(Math.random() * possibilities.length)];


//     if(userChoice === botChoice){
//         console.log ("this is draw ", `BOT: ${botChoice} -`, `- PLAYER: ${userChoice}` )
        
//     }else if(weapons[userChoice].wins == botChoice){
//         console.log("YOU WON", `BOT: ${botChoice} -`, `- PLAYER: ${userChoice}`)
//     }else{
//         console.log(
//           "YOU LOST",
//           `BOT: ${botChoice} -`,
//           `- PLAYER: ${userChoice}`
//         );
//     }


//   });
// });

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
