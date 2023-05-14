"use strict";
const allContents = document.querySelectorAll(".content");
const allTabs = document.querySelectorAll(".btn-container .tab-btn");
// console.log(allTabs, allContents);

allTabs.forEach((curTab) => {
  curTab.addEventListener("click", (e) => {
    allTabs.forEach((each) => each.classList.remove("active"));
    const clickedTab = e.currentTarget;
    const clickedTabId = clickedTab.dataset.id;
    clickedTab.classList.add("active");
    // console.log(clickedTab);

    allContents.forEach((each) => {
      const title = each.querySelector("h4").textContent;
      if (clickedTabId === title) {
        each.classList.add("active");
      } else {
        each.classList.remove("active");
      }
      //   console.log(clickedTabId, title);
    });
  });
});
