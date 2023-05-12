"use strict";

// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "Oluwaseun Sodeeq",
    job: "FrontEnd Developer",
    img: "https://avatars.githubusercontent.com/u/101711596?v=4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat nam cupiditate ipsum, sit dolorem repudiandae, veritatis doloremque magni consequatur ad porro quae praesentium voluptate nihil deleniti vel? Aliquid eveniet odit, fuga corporis nostrum unde distinctio ipsa amet vero iusto libero quod nihil mollitia .",
  },
];

let currentId = 1;
const allBtnsContainer = document.querySelector(".review");
const allBtns = allBtnsContainer.querySelectorAll("button");
const image = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

// console.log(allBtns);
allBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const click = e.currentTarget.classList;
    if (click.contains("prev-btn")) {
      if (currentId <= 1) {
        currentId = reviews.length;
      } else {
        currentId--;
      }
    } else if (click.contains("next-btn")) {
      if (currentId >= reviews.length) {
        currentId = 1;
      } else {
        currentId++;
      }
    } else if (click.contains("random-btn")) {
      currentId = Math.trunc(Math.random() * reviews.length) + 1;
    }
    //current Object
    const currentObj = reviews.find((each) => each.id === currentId);

    // console.log(image, author, job, info);

    //assigning the current obj properties
    author.textContent = currentObj.name;
    job.textContent = currentObj.job;
    info.textContent = currentObj.text;

    //timer
    const timer = function () {
      image.src = currentObj.img;
    };
    setTimeout(timer, 1000);
    console.log(currentObj.id);
  });
});
