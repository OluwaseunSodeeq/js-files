let container = document.querySelector(".content");
const userContainer = container.querySelector(".user");
const sentenceContainer = container.querySelector(".sentence");
const allinputs = container.querySelectorAll("input");
const userName = userContainer.querySelector("input");
const submitAndCheck = document.querySelector("#submit");
let yourName, usernameValue, userSenValue, myname, myBoolean;

const SubmitFunction = function () {
  myBoolean = false;
  const usernameValue = userName.value;
  console.log(usernameValue);

  if (usernameValue === "") return;
  console.log(usernameValue, this.previousElementSibling);
  //   this.previousElementSibling.style.display = "none";
  container.innerHTML = "";
  sentenceFunction();

  myBoolean = true;
};

submitAndCheck.addEventListener("click", SubmitFunction);

const sentenceFunction = function () {
  container = document.querySelector(".content");

  erorMessage = "";
  const html = `
    <div class="sentence">
        <label for="text">Use your name in a senetence</label>
        <input
          type="text"
          id="text
      "
        />
    </div>`;

  container.insertAdjacentHTML("afterBegin", html);
  //   const userSentence = sentenceContainer.querySelector("input");
};
// sentenceFunction();
const nameVariable = userName.value;
if (nameVariable) {
  //   sentenceFunction();

  //   container.firstChild.style.display = "none";
  const sentenceChecker = function () {
    // this.previousElementSibling.style.display = "none";
    const userSentence = sentenceContainer.querySelector("input");
    userSenValue = userSentence.value;
    console.log(userSenValue);

    myname = userSenValue
      .split(" ")
      .filter((value) => value === nameVariable)
      .join();
    console.log(myname);

    // if (!myname) return;
    // this.previousElementSibling.style.display = "none";

    console.log(myname);
    yourName = myname;
    console.log(`Hello User your Name is ${yourName}`);
    container.innerHTML = "";

    // container.firstChild.textContent = "";
  };
  submitAndCheck.addEventListener("click", sentenceChecker);
}

const resultFunc = function () {
  container.innerHTML = "";
  container = document.querySelector(".content");
  const templateHtml = document
    .createElement("p")
    .innerText(`Hello, ${myname} is The you entered`);
  container.append.templateHtml;
};
