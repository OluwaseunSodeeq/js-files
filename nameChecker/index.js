let container = document.querySelector(".content");
const userContainer = container.querySelector(".user");
const sentenceContainer = container.querySelector(".sentence");
const sentenceinput = sentenceContainer.querySelector(".input");
const allinputs = container.querySelectorAll("input");
const userName = userContainer.querySelector("input");
const submitAndCheck = document.querySelector("#submit");
let yourName, usernameValue, userSenValue, myname, mySen, myBoolean;

//functions

sentenceContainer.classList.add("hidden");
/*
const copyingFunction = function (a, b, c, d, e) {
  if (a.value === "") return;
  b = a.value;
  c = packNameAndSenetence(b);
  console.log(b, c);
  e.classList.remove("hidden");
  d.classList.add("hidden");
};

const user = function (e) {
  e.preventDefault();
  copyingFunction(
    userName,
    usernameValue,
    myname,
    userContainer,
    sentenceContainer
  );
  return myname;
};
submitAndCheck.addEventListener("click", user);

console.log(user());

// if (sentenceinput.value === "") return;
const sen = function (e) {
  e.preventDefault();
  console.log(myname);
  copyingFunction(
    sentenceinput,
    userSenValue,
    mySen,
    sentenceContainer,
    userContainer
  );

  console.log(myname, mySen);
};
// sen();

if (user) console.log("hello");
if (2 > 3) {
  const sen = function (e) {
    e.preventDefault();
    console.log(myname);
    copyingFunction(
      sentenceinput,
      userSenValue,
      mySen,
      sentenceContainer,
      userContainer
    );
  };
  // submitAndCheck.addEventListener("click", sen);
}

// console.log(usernameValue);

const packNameAndSenetence = (value) => value;
*/
/*
const sentenceFunction = function (name) {
  container.innerHTML = "";
  if (2 > 3) {
    //Creation of Element
    const mydiv = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = "Use your name in a senetence";
    const mylabel = label;

    let input = document.createElement("input");
    input.type = "text";
    // input.setAttribute("value");

    const myInput = input;
    console.log(myInput);

    //appending the elements
    container.appendChild(mydiv);

    mydiv.appendChild(mylabel);
    console.log(mylabel);

    mydiv.appendChild(myInput);
    //styling
    mydiv.classList.add("sentence");

    console.log(container);
    const inputS = mydiv.querySelector("[type='text'").value;
    console.log(inputS);
  }

  const html = `
    <div class="sentence">
          <label for="text">Use your name in a senetence</label>
          <input
            type="text"
            id="text
        "
          />
    </div>
     `;

  container.insertAdjacentHTML("afterbegin", html);
  // const sentenceContainer = container.querySelector("sentence");
  const userSentence = container.querySelector("input");
  // console.log(userSenValue);
  // console.log(userSenValue.value);

  yourName = name;
  myBoolean = true;

  if (userSentence.value === "") return;
  console.log("hello");

  userSenValue = userSentence.value;
  console.log(userSenValue);

  myname = userSenValue
    .split(" ")
    .filter((value) => value === nameVariable)
    .join();
  console.log(myname);
  yourName = myname;
  console.log(`Hello User your Name is ${yourName}`);

  // sentenceChecker();

  // sentenceChecker(name);
};

const SubmitFunction = function () {
  myBoolean = false;
  const usernameValue = userName.value;
  if (usernameValue === "") return;
  // console.log(usernameValue, this.previousElementSibling);
  container.innerHTML = "";

  sentenceFunction(usernameValue);
  console.log(usernameValue);
};

submitAndCheck.addEventListener("click", SubmitFunction);
submitAndCheck.addEventListener("click", sentenceFunction);
// const nameVariable = userName.value;
const sentenceChecker = function () {
  // const userSentence = sentenceContainer.querySelector("input");
  // userSenValue = userSentence.value;
  // console.log(userSenValue);
  // myname = userSenValue
  //   .split(" ")
  //   .filter((value) => value === nameVariable)
  //   .join();
  // console.log(myname);
  // yourName = myname;
  // console.log(`Hello User your Name is ${yourName}`);
};

// console.log(myBoolean);
// submitAndCheck.addEventListener("click", sentenceChecker);

// if (myBoolean) {
//   console.log("hello");
//   submitAndCheck.addEventListener("click", sentenceChecker);
// }

// const resultFunc = function () {
//   container.innerHTML = "";
//   container = document.querySelector(".content");
//   const templateHtml = document
//     .createElement("p")
//     .innerText(`Hello, ${myname} is The you entered`);
//   container.append.templateHtml;
// };
*/
