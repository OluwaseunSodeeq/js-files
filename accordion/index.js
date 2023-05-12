//traversing the dom
const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");
console.log(questions, btns);

const remove = function (current) {
  questions.forEach(function (item) {
    if (item !== current) {
      item.classList.remove("show-text");
    }
  });
};
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    remove(question);

    question.classList.toggle("show-text");
  });
});

//ANOTHER APPRAOCH
//using selectors inside the element
if (2 > 3) {
  const questions = document.querySelectorAll(".question");

  questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    // console.log(btn);

    btn.addEventListener("click", function () {
      // console.log(question);

      questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });

      question.classList.toggle("show-text");
    });
  });
}
