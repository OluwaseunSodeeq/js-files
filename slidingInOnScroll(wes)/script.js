function debounce(func, wait = 20, immediate = true) {
  var timeout;
  //   console.log(func);

  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const allImages = document.querySelectorAll(".slide-in");
const checkSlide = function (e) {
  //   console.log(e);
  allImages.forEach((eachImage) => {
    //to get the halfway through the image
    const slideInAt =
      window.scrollY + window.innerHeight - eachImage.height / 2;
    //to get the bottom of the image
    const imageBottom = eachImage.offsetTop + eachImage.height;
    const isHalfShown = slideInAt > eachImage.offsetTop;
    // console.log(eachImage.offsetTop, eachImage.height);

    const isNotScrollPast = window.scrollY < imageBottom;
    console.log(slideInAt, eachImage.offsetTop, window.scrollY, imageBottom);
    console.log(isHalfShown);

    if (isHalfShown && isNotScrollPast) {
      eachImage.classList.add("active");
      console.log("hello");
    } else {
      eachImage.classList.remove("active");
      console.log("hi");
    }
    // console.log(
    //   slideInAt,
    //   window.scrollY,
    //   window.innerHeight,
    //   eachImage.height / 2
    // );
  });
};
window.addEventListener("scroll", debounce(checkSlide));

//To get where the image needs to show
// window.scrollY: It's is equivalent to pageYOffset. both returns the number pixels or how far  a document has scrolled from the upper left corner(top) or is currently scrolled vertically i.e used to get how far the page is being srollled down with window.scrollY at a very top
// window.innerHeight: its return the interior height of a document in pixels, including the height of a horizontal scroll bar if included.
//window.innerWidth: this returns the width
//eachImage.offsetTop :this returns the distance of the outer border of the current element(image) relative to the inner border of the top of the offsetParent, the closest positioned ancestor element.
