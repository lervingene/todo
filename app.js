// Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

const todoFilter = document.querySelector(".filter-todo");

// Listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateList);
todoFilter.addEventListener("change", filterList);

//Functions 
function addTodo(event) {
    //Prevent from submitting
    event.preventDefault();

    //add div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");

    //add li ?-why do I need to wrap this with div?
    const todoLi = document.createElement("li");
    todoLi.classList.add("todoLi");
    todoLi.innerText = todoInput.value;

    todoDiv.appendChild(todoLi);

    //add a check button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = "<i class='fas fa-check'></i>";
    checkBtn.classList.add("checkBtn");
    todoDiv.appendChild(checkBtn);

    //add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    deleteBtn.classList.add("deleteBtn");
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);

    todoInput.value = "";

    filterList(event);
}

function updateList(event) {

    const item = event.target;

    //delete function
    if (item.classList[0] === "deleteBtn") {
        const todo = item.parentElement;
        todo.classList.add("slide-out");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
        // todo.remove();
    }

    //taskcomplete function
    if (item.classList[0] === "checkBtn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

//filter function
function filterList(event) {

    const todoDivs = todoList.childNodes;

    switch (todoFilter.value) {
        case "All":
            todoDivs.forEach(element => {
                element.classList.remove("hidden");
            });
            break;
        case "Completed":
            todoDivs.forEach(element => {
                if (element.classList.contains("completed")) {
                    element.classList.remove("hidden");
                } else {
                    element.classList.add("hidden");
                }
            });
            break;
        case "Not Completed":
            todoDivs.forEach(element => {
                if (element.classList.contains("completed")) {
                    element.classList.add("hidden");
                } else {
                    element.classList.remove("hidden");
                }
            });
            break;
        default:
            //same as case: ALL
            todoDivs.forEach(element => {
                element.classList.remove("hidden");
            });
            break;
    }
}