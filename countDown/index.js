const buttonContainer = document.querySelector(".timer__controls");
const allBtns = document.querySelectorAll(".timer__button");
const inputField = document.querySelector("[name='minutes']");
const timeleft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const form = document.querySelector("#custom");
const displayMsg = document.querySelector(".display");
const stopBtn = document.querySelector("#stop-Btn");
let countdown;

const startFunction = function () {
  //   timeleft.classList.remove("over");

  const second = this.dataset.time;
  let seconds = Number(second);
  timeleft.classList.remove("size");
  stopBtn.classList.remove("hide");
  clearInterval(countdown);
  timer(seconds);
};

const timer = function (secs) {
  const now = Date.now(); //
  const then = now + secs * 1000;
  let x;
  //display endTime//
  endTimeFunction(secs);

  //default display//
  dispayMinAndSecs(Number(secs));

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft <= 0) {
      //  display sec = 0;//
      dispayMinAndSecs(0);
      endTime.textContent = "You are late, Dear!";
      timeleft.classList.remove("size");
      timeleft.classList.add("over");
      endTime.classList.add("over");
      stopBtn.classList.add("hide");
      clearInterval(countdown);
      return;
    } else {
      stopBtn.addEventListener("click", () => {
        clearInterval(countdown);
        const msg = function () {
          timeleft.classList.add("size");
          timeleft.textContent = "Congratulations";
          endTime.textContent = "You made it!";
          return;
        };
        setTimeout(msg, 2000);
      });
    }
    //
    dispayMinAndSecs(secondsLeft);
  }, 1000);
};

const dispayMinAndSecs = function (secondsLeft) {
  const mins = Math.floor(secondsLeft / 60);
  const sec = secondsLeft % 60;
  endTime.classList.remove("over");
  timeleft.classList.remove("over");

  timeleft.textContent = `${mins < 10 ? "0" : ""}${mins}:${
    sec < 10 ? "0" : ""
  }${sec}`;
};

const endTimeFunction = function (secs) {
  const nowOld = new Date(); //this will return evrthing
  const newMins = nowOld.getMinutes() + Math.round(secs / 60);
  const displayMins = newMins > 60 ? newMins % 60 : newMins;
  const newSecs = (nowOld.getMinutes() * 60 + secs) % 60;
  const newHours = nowOld.getHours() + Math.floor(newMins / 60);

  endTime.textContent = `Be Back At  ${newHours} :${
    displayMins > 10 ? "" : ""
  }${displayMins}: ${newSecs < 10 ? "0" : ""}${newSecs}`;
};

const copyValue = function (e) {
  e.preventDefault();
  timeleft.classList.remove("size");
  clearInterval(countdown);
  const value = this.minutes.value;
  console.log(typeof value);
  if (value === "") return;
  timer(value * 60);
  this.reset();
};

allBtns.forEach((each) => {
  each.addEventListener("click", startFunction);
});
form.addEventListener("submit", copyValue);

//=================
//WES CODE ON THIS
//===================
if (2 > 3) {
  let countdown;
  const timerDisplay = document.querySelector(".display__time-left");
  const endTime = document.querySelector(".display__end-time");
  const buttons = document.querySelectorAll("[data-time]");

  function timer2(seconds) {
    // clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we should stop it!
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      // display it
      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${
      remainderSeconds < 10 ? "0" : ""
    }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
  }

  function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;
  }

  function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer2(seconds);
  }

  buttons.forEach((button) => button.addEventListener("click", startTimer));
  document.customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer2(mins * 60);
    this.reset();
  });
}
