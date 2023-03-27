const allItems = document.querySelectorAll(".item");
const itemContainer = document.querySelector(".items");
let mouseDown, starterX, scrolLeft;

const activeFunc = function (e) {
  mouseDown = true;
  this.classList.add("active");
  starterX = e.pageX - this.offsetLeft;
  scrolLeft = this.scrollLeft;
  // console.log(e, e.pageX, this.offsetLeft, starterX, scrolLeft);
};
const deactivate = function () {
  mouseDown = false;
  this.classList.remove("active");
};
//I have no idea why the color changed here.
const dragFunction = function (e) {
  console.log("hello drag");

  if (!mouseDown) return;
  console.log("hello drag Down");
  e.preventDefault();
  const newX = e.pageX - this.offsetLeft;
  const finalX = (newX - starterX) * 3;
  // const walk = x - startX;
  this.scrollLeft = scrolLeft - finalX;
  //   console.log(
  //     e.pageX,
  //     this.offsetLeft,
  //     newX,
  //     starterX,
  //     finalX,
  //     scrolLeft,
  //     this.scrollLeft
  //   );
};
itemContainer.addEventListener("mouseleave", deactivate);
itemContainer.addEventListener("mouseup", deactivate);
itemContainer.addEventListener("mousedown", activeFunc);
itemContainer.addEventListener("mousemove", dragFunction);
