const itemsListContainer = document.querySelector(".plates");
const addItemBtn = document.querySelector(".add-items");

//The line below stores the added item to the local storage in the browser(short circuiting)
const itemsArray = JSON.parse(localStorage.getItem("itemsArray")) || [];

function readInputFunction(e) {
  e.preventDefault();
  const inputedValue = this.querySelector("[name=item]").value;
  // console.log("Hello", inputedValue);

  const itemObject = {
    inputedValue,
    checkStatus: false,
  };

  itemsArray.push(itemObject);
  console.log(itemObject);
  createItemFunction(itemsArray, itemsListContainer);
  // console.log(itemsArray, itemsListContainer);

  localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
  this.reset();
}

function createItemFunction(itemsarray = [], itemsListContainar) {
  itemsListContainar.innerHTML = itemsarray
    .map((eachItem, i) => {
      // console.log(eachItem, i);

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
  localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
  createItemFunction(itemsArray, itemsListContainer);
  console.log(itemsArray, itemsListContainer);
}
addItemBtn.addEventListener("submit", readInputFunction);
itemsListContainer.addEventListener("click", storageOfData);

createItemFunction(itemsArray, itemsListContainer);
