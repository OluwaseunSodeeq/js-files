const holes = document.querySelectorAll(".hole");
let lastHole, savedScore;
let timeUp = false;
let clickedScored = 0;
// let scoreBoard = document.querySelector(".score");
let scoreBoard = document.querySelector(".score");

console.log(scoreBoard);

const startBtn = document.querySelector(".startBtn");
const moles = document.querySelectorAll(".mole");

scoreBoard.textContent = localStorage.getItem("key") || 0;

const start = function () {
  scoreBoard.textContent = "0";
  timeUp = false;
  clickedScored = 0;
  howLong();
  setTimeout(() => {
    timeUp = true;
  }, 10000);
};

const holeTodisplay = function (holes) {
  // const index = Math.trunc(Math.random() * holes.length + 1);
  const index = Math.floor(Math.random() * holes.length);

  const curhole = holes[index];
  console.log(index, curhole);
  if (curhole === lastHole) {
    return holeTodisplay(holes);
  }
  lastHole = curhole;
  return curhole;
};
const howLong = function () {
  const time = beepingTime(1000, 200);
  const returnedHole = holeTodisplay(holes);
  console.log(returnedHole);

  returnedHole.classList.add("up");
  setTimeout(() => {
    returnedHole.classList.remove("up");
    if (!timeUp) howLong();
    console.log(timeUp);
  }, time);
};
const clicked = function (e) {
  if (!e.isTrusted) return;
  clickedScored++;
  scoreBoard.textContent = clickedScored;
  localStorage.setItem("key", JSON.stringify(clickedScored));
  score = localStorage.getItem("key");

  this.parentNode.classList.remove("up");
};
const beepingTime = function (max, min) {
  const beepTime = Math.round(Math.random() * (max - min) + min);
  return beepTime;
};

moles.forEach((each) => each.addEventListener("click", clicked));
startBtn.addEventListener("click", start);
beepingTime(1000, 200);
