const videoContainer = document.querySelector(".player");
const video = videoContainer.querySelector(".player__video");
const progressBar = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const playBtn = document.querySelector(".toggle");
const skipBtns = document.querySelectorAll("[data-skip]");
const rangeInputs = document.querySelectorAll("input[type='range']");

// console.log(skipBtns, rangeInputs);
const playFunction = function () {
  const playMethod = video.paused ? "play" : "pause";
  video[playMethod]();
};

const btnChanges = function () {
  const playOrPauseIcon = video.paused ? "►" : "❚ ❚";
  playBtn.textContent = playOrPauseIcon;
};

const rangeChangesFuntion = function () {
  video[this.name] = this.value;
};

const skipFunction = function () {
  const dataValue = +this.dataset.skip;
  video.currentTime += dataValue;
  //   console.log(dataValue);
};

//To control the value  of the volume or speed with mousemove or change event
rangeInputs.forEach((eachRange) => {
  eachRange.addEventListener("mousemove", rangeChangesFuntion);
  eachRange.addEventListener("change", rangeChangesFuntion);
});

//To forward or backward the video current time
skipBtns.forEach((eachSkipbtn) => {
  eachSkipbtn.addEventListener("click", skipFunction);
});

const progressBarChanges = function () {
  const percentage = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percentage}%`;
};
const progressBArDragging = function (e) {
  const dragTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = dragTime;
};
let mouseMove = false;
//To pause and Paly the video on clicking on the icon and the Video itself
playBtn.addEventListener("click", playFunction);
video.addEventListener("click", playFunction);

//To display the opposite state of the video with the icon and chaging it on clicking the video or the icon
playBtn.addEventListener("click", btnChanges);
video.addEventListener("click", btnChanges);

//To display how long you have seen the video
video.addEventListener("timeupdate", progressBarChanges);

//To mainpulate and update the current time of the video on mousedown or on clicking
progressBar.addEventListener("mousemove", progressBArDragging);
progressBar.addEventListener("mouseup", () => (mouseMove = false));
progressBar.addEventListener("mousemove", () => (mouseMove = true));
progressBar.addEventListener(
  "mousedown",
  () => mouseMove && progressBArDragging
);
progressBar.addEventListener("click", progressBArDragging);
