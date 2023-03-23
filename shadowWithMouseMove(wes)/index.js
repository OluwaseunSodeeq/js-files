const h1Parent = document.querySelector(".hero");
const h1 = document.querySelector("h1");
const direction = 500;
const mouseFunction = function (e) {
  //   const x = this.offsetWidth;
  //   const y = this.offsetHeight;

  const { offsetWidth: width, offsetHeight: height } = h1Parent;

  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xDirection = Math.round((x / width) * direction - direction / 2);

  const yDirection = Math.round((y / height) * direction - direction / 2);
  //   console.log(x, y, xDirection, yDirection);

  h1.style.textShadow = `
  ${xDirection}px ${yDirection}px 0 rgba(255,255,0,0.7),
  ${xDirection * -1}px ${yDirection}px 0 rgba(0,255,255,0.7),
  ${yDirection}px ${xDirection * -1}px 0 rgba(0,255,0,0.7),
  ${yDirection * -1}px ${xDirection}px 0 rgba(0,0,255,0.7)`;
};

h1Parent.addEventListener("mousemove", mouseFunction);
