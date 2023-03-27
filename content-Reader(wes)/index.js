const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector('[name="text"]').value;

console.log(options);

const generateVoices = function () {
  voices = this.getVoices();
  console.log(voices);

  voicesDropdown.innerHTML = voices
    // .filter((voice) => voice.lang.includes("en"))
    .filter((voice) => voice.lang === "en-US")
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
  console.log(voicesDropdown);
};

const toggleVoice = function (start = true) {
  speechSynthesis.cancel();
  if (start) {
    speechSynthesis.speak(msg);
    console.log("hello");
  }
};

const setVoice = function () {
  msg.voice = voices.find((voice) => voice.name === this.value);
  console.log(msg.voice);
  toggleVoice();
};

const setOneOfTheOptions = function () {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggleVoice();
};

speechSynthesis.addEventListener("voiceschanged", generateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) =>
  option.addEventListener("change", setOneOfTheOptions)
);
speakButton.addEventListener("click", toggleVoice);
stopButton.addEventListener("click", toggleVoice.bind(null, false));
// stopButton.addEventListener("click", () => toggle(false));
