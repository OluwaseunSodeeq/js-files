// const bands = [
//   "The Plot in You",
//   "The Devil Wears Prada",
//   "Pierce the Veil",
//   "Norma Jean",
//   "The Bled",
//   "Say Anything",
//   "The Midway State",
//   "We Came as Romans",
//   "Counterparts",
//   "Oh, Sleeper",
//   "A Skylit Drive",
//   "Anywhere But Here",
//   "An Old Dog",
// ];

const contentArea = document.querySelector(".userContent");
const addBtn = contentArea.querySelector("button");
const allInputedSEn = contentArea.querySelectorAll("div");
const withArticle = document.querySelector(".with");
const withOutArticle = document.querySelector(".withOut");
// console.log(contentArea, allInputedSEn, addBtn);
let myArray;

const addInput = function (e) {
  e.preventDefault();
  const allInputs = contentArea.querySelectorAll("input");
  const all = Array.from(allInputs);
  const check = (any) => any.value === "";
  if (all.some(check)) return;
  myArray = [];
  allInputs.forEach((each) => {
    myArray.push(each.value);
  });
  console.log(myArray, "hello");

  if (all.length >= 3) return;
  const html = `
  <input type="text" data-num="i" name="" id="" />
 `;
  this.insertAdjacentHTML("beforebegin", html);
};
addBtn.addEventListener("click", addInput);

// const checking = function () {
//   console.log("hello");

//   if (allInputedSEn.length <= 1) return;
//   allInputedSEn.forEach((each) => {
//     myArray.push(each.value);
//     contentArea.classList.add("hidden");
//   });
//   console.log(myArray);
// };

// withOutArticle.addEventListener("click", checking);
const sortWith = function (myArray) {
  const replaceTheFisrstArticle = function (clauses) {
    return clauses.replace(/^(a |an |the )/i, "").trim();
  };
  // console.log(replaceTheFisrstArticle("The Plot in You"));
  const result = myArray.sort((a, b) =>
    replaceTheFisrstArticle(a) > replaceTheFisrstArticle(b) ? 1 : -1
  );
  console.log(result);

  const container = document.querySelector("#bands");
  console.log(container);
  container.innerHTML = result
    .map((each) => {
      return `<li>${each}</li>`;
    })
    .join("");
};
// sortWith(bands);
// addBtn.addEventListener("click", addInput);
withArticle.addEventListener("click", () => {
  contentArea.innerHTML = sortWith(myArray);
});
