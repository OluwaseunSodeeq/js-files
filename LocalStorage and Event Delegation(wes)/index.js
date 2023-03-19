/*
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
  <li> 
    <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
    <label for="item${i}">${plate.text}</label>
  </li>
`;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);
*/
const itemsListContainer = document.querySelector(".plates");
const addItemForm = document.querySelector(".add-items");
const itemsArray = JSON.parse(localStorage.getItem("items")) || [];

function readInputFunction(e) {
  e.preventDefault();
  const inputedValue = this.querySelector("[name=item]").value;
  console.log("Hello", inputedValue);

  const item = {
    inputedValue,
    checkStatus: false,
  };

  itemsArray.push(item);
  console.log(item);
  createItemFunction(itemsArray, itemsListContainer);
  console.log(itemsArray, itemsListContainer);

  localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
  this.reset();
}

function createItemFunction(itemsarray = [], itemsListContainar) {
  itemsListContainar.innerHTML = itemsarray
    .map((eachItem, i) => {
      console.log(eachItem, i);

      return ` <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        eachItem.checkStatus ? "checked" : ""
      } />
    <label for="item${i}">${eachItem.inputedValue}</label>
  </li>
  `;
    })
    .join("");
}
function storageOfData(e) {
  if (!e.target.matches("input")) return;
  const clickedInput = e.target;
  const inputIndex = clickedInput.dataset.index;
  itemsArray[inputIndex].checkStatus = !itemsArray[inputIndex].checkStatus;
  console.log(itemsArray, itemsListContainer);

  localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
  createItemFunction(itemsArray, itemsListContainer);
  console.log(itemsArray, itemsListContainer);
}
addItemForm.addEventListener("submit", readInputFunction);
itemsListContainer.addEventListener("click", storageOfData);

createItemFunction(itemsArray, itemsListContainer);
console.log(itemsArray, itemsListContainer);
