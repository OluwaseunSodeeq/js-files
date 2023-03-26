// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
const allLinks = document.querySelectorAll("a");
const hoverSpan = document.createElement("span");
hoverSpan.classList.add("highlight");
document.body.appendChild(hoverSpan);
// console.log(allLinks);

const hoverFunction = function () {
  const curentElement = this.getBoundingClientRect();
  console.log(curentElement);

  const itsObject = {
    width: curentElement.width,
    height: curentElement.height,
    top: curentElement.top + window.scrollY,
    left: curentElement.left + window.scrollX,
  };
  console.log(itsObject);

  hoverSpan.style.width = `${itsObject.width}px`;
  hoverSpan.style.height = `${itsObject.height}px`;
  hoverSpan.style.transform = `translate(${itsObject.left}px, ${itsObject.top}px)`;
};
allLinks.forEach((each) => {
  each.addEventListener("mouseenter", hoverFunction);
});
