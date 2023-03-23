window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const voiceRecognition = new SpeechRecognition();
voiceRecognition.interimResults = true;
voiceRecognition.lang = "en-US";

const words = document.querySelector(".words");
let p = document.createElement("p");
words.appendChild(p);

voiceRecognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((results) => results[0])
    .map((results) => results.transcript)
    .join("");
  console.log(transcript);

  const poopScript = transcript.replace(/shit|fuck|motherfuck|sex|/gi, "**");
  p.textContent = poopScript;

  if (transcript.includes("Allah")) {
    const allah = "Allah";
    console.log("Hello");
  }

  if (e.results[0].isFinal) {
    p = document.querySelector("p");
    words.appendChild(p);
  }
});
voiceRecognition.addEventListener("end", voiceRecognition.start);
voiceRecognition.start();
