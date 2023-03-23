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
let myArray = [];

const addInput = function () {
  const html = `
  <p id="" value="" class="last"></p>
   
    `;
  this.insertAdjacentHTML("beforebegin", html);
};
const checking = function () {
  console.log("hello");

  if (allInputedSEn.length <= 1) return;
  allInputedSEn.forEach((each) => {
    myArray.push(each.value);
    contentArea.classList.add("hidden");
  });
  console.log(myArray);
};
withOutArticle.addEventListener("click", checking);
const sortWith = function () {
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
addBtn.addEventListener("click", addInput);
withArticle.addEventListener("click", sortWith);
