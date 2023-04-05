const todoContaner = document.querySelector("#list");
const todoForm = document.querySelector("#new-todo-form");
const addBtn = document.querySelector("#new-todo-form button");
let inputedField = document.querySelector("#todo-input");
// getting local storage
const LS_PPREFIX = "lS_PREFIX";
const LS_KEY = `${LS_PPREFIX}--key`;
// const myArray = [];
// const myArray = JSON.parse(localStorage.getItem(LS_KEY)) || [];
let myArray = gettingLS();
//Master piece
console.log(myArray);

const addFunction = function (e) {
  e.preventDefault();

  const inputedValue = inputedField.value;
  if (inputedValue === "") return;

  const todoComponents = {
    value: inputedValue,
    checkStatus: false,
    id: new Date().valueOf().toString(),
  };
  myArray.push(todoComponents);
  displayInPutValue(todoComponents);
  settingLS();
};

const displayInPutValue = function (value) {
  //rendering the template
  const html = `
    <li class="list-item" data-id="${value.id}">
      <label class="list-item-label">
       <input type="checkbox" data-list-item-checkbox "/>
       <span data-list-item-text>${value.value}</span>
      </label>
      <button data-button-delete>Delete</button>
    </li>
  `;

  todoContaner.insertAdjacentHTML("afterbegin", html);
  const parent = document.querySelector(`[data-id="${value.id}"]`);
  const checkbox = parent.querySelector("[data-list-item-checkbox]");
  checkbox.checked = value.checkStatus;

  inputedField.value = "";
};

const TwoInOne = function (value) {
  if (!e.target.matches(value)) return;
  const parent = e.target.closest(".list-item");
  const todoId = parent.dataset.key;
  console.log(todoId);
};
const deleteFunction = function (e) {
  // const deleteBtn = document.querySelector("[data-button-delete]");
  if (!e.target.matches("[data-button-delete]")) return;
  const parent = e.target.closest(".list-item");
  const todoId = parent.dataset.id;
  console.log(todoId);
  parent.remove();
  myArray = myArray.filter((item) => item.id !== todoId);
  settingLS();
  console.log(myArray);
};

const checkFunction = function (e) {
  // const checkBtn = document.querySelector('[type="checkbox"]');
  if (!e.target.matches("[data-list-item-checkbox]")) return;
  let parent = e.target.closest(".list-item");
  const todoId = parent.dataset.id;
  const itemChecked = myArray.find((item) => item.id === todoId);
  itemChecked.checkStatus = e.target.checked;
  console.log(itemChecked.checkStatus);

  settingLS();
  console.log(itemChecked);
};
const settingLS = function () {
  // setting local storage
  localStorage.setItem(LS_KEY, JSON.stringify(myArray));
};
function gettingLS() {
  // setting local storage
  const ls = localStorage.getItem(LS_KEY);
  return JSON.parse(ls) || [];
}
//to display the saved inputs in the local Storage
myArray.forEach(displayInPutValue);

todoForm.addEventListener("submit", addFunction);
todoContaner.addEventListener("click", deleteFunction);
todoContaner.addEventListener("change", checkFunction);

if (2 > 3) {
  const form = document.querySelector("#new-todo-form");
  const todoInput = document.querySelector("#todo-input");
  const list = document.querySelector("#list");
  const template = document.querySelector("#list-item-template");
  const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST";
  const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;
  let todos = loadTodos();
  todos.forEach(renderTodo);

  list.addEventListener("change", (e) => {
    if (!e.target.matches("[data-list-item-checkbox]")) return;

    const parent = e.target.closest(".list-item");
    const todoId = parent.dataset.todoId;
    console.log(todoId);

    const todo = todos.find((t) => t.id === todoId);
    todo.complete = e.target.checked;
    saveTodos();
  });

  list.addEventListener("click", (e) => {
    if (!e.target.matches("[data-button-delete]")) return;

    const parent = e.target.closest(".list-item");
    const todoId = parent.dataset.todoId;
    parent.remove();
    todos = todos.filter((todo) => todo.id !== todoId);
    saveTodos();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoName = todoInput.value;
    if (todoName === "") return;

    const newTodo = {
      name: todoName,
      complete: false,
      id: new Date().valueOf().toString(),
    };
    todos.push(newTodo);
    renderTodo(newTodo);
    saveTodos();
    todoInput.value = "";
  });

  function renderTodo(todo) {
    const templateClone = template.content.cloneNode(true);
    const listItem = templateClone.querySelector(".list-item");
    listItem.dataset.todoId = todo.id;
    const textElement = templateClone.querySelector("[data-list-item-text]");
    textElement.innerText = todo.name;
    const checkbox = templateClone.querySelector("[data-list-item-checkbox]");
    checkbox.checked = todo.complete;
    list.appendChild(templateClone);
  }

  function loadTodos() {
    const todosString = localStorage.getItem(TODOS_STORAGE_KEY);
    return JSON.parse(todosString) || [];
  }

  function saveTodos() {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }
}
