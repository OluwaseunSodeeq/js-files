"use strict";
const value = document.querySelector("#value");
const allbtns = document.querySelectorAll(".btn");
let updateValue = 0;

//Function
const updateFunction = function (e) {
  const click = e.currentTarget.classList;
  if (click.contains("decrease")) {
    if (updateValue == 0) return;
    updateValue--;
  } else if (click.contains("increase")) {
    updateValue++;
  } else if (click.contains("reset")) {
    updateValue = 0;
  }
  value.textContent = updateValue;
};

allbtns.forEach((clickedBtn) => {
  clickedBtn.addEventListener("click", updateFunction);
});
