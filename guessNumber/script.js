"use strict";
const body = document.querySelector("body");
const scoreClass = document.querySelector(".score");

//dynamic values
let inpValue = document.querySelector(".guess");
let questionMsg = document.querySelector(".number");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

//Btns
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

//Functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const checkFunction = function () {
  const guessNumber = Number(inpValue.value);

  // When there is no input
  if (!guessNumber) {
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guessNumber === secretNumber) {
    displayMessage("🎉 Correct Number!");
    inpValue.classList.add("hide");
    questionMsg.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    questionMsg.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;

      if (highscore !== 20) return;
      questionMsg.style.width = "50rem";
      questionMsg.textContent = "Congartultions!";
    }

    // When guessNumber is wrong
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? "📈 Too high!" : "📉 Too low!"
      );
      score--;
      scoreClass.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreClass.textContent = 0;
    }
  }
  inpValue.value = "";
};
const againFunction = function () {
  inpValue.classList.remove("hide");
  questionMsg.style.width = "15rem";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  scoreClass.textContent = score;
  questionMsg.textContent = "?";
  inpValue.value = "";
  body.style.backgroundColor = "#222";
};

checkBtn.addEventListener("click", checkFunction);
againBtn.addEventListener("click", againFunction);
