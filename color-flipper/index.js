const colors = [
  "green",
  "#cea135",
  "rgba( 0, 255, 255, 1)",
  "red",
  "CHARTREUSE",
  "rgba(133,122,200)",
  "#f15025",
  "blue",
  "rgba(165,42, 42,1)",
];

const action = function () {
  const randomElement = Math.trunc(Math.random() * 9 + 1);
  document.querySelector(".color").textContent = colors[randomElement - 1];
  document.querySelector("body").style.backgroundColor =
    colors[randomElement - 1];

  //CURRENT COLOR TYPE NAVIGATION
  const liContainer = document.querySelector(".nav-links");
  const copy = [...colors[randomElement - 1]]; //String to Array

  //HEX
  copy.some((any) => any === "#")
    ? (liContainer.querySelectorAll("a")[1].style.color =
        "var(--clr-primary-5)")
    : (liContainer.querySelectorAll("a")[1].style.color =
        "var(--clr-primary-1)");

  //RGBA
  copy.some((any) => any === "(")
    ? (liContainer.querySelectorAll("a")[2].style.color =
        "var(--clr-primary-5)")
    : (liContainer.querySelectorAll("a")[2].style.color =
        "var(--clr-primary-1)");

  //SIMPLE COLOR

  copy.every((any) => any !== "#" && any !== "(")
    ? (liContainer.querySelectorAll("a")[0].style.color =
        "var(--clr-primary-5)")
    : (liContainer.querySelectorAll("a")[0].style.color =
        "var(--clr-primary-1)");
};
document.addEventListener("click", action);
