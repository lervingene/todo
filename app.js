// Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// Listeners
todoBtn.addEventListener("click", addTodo);

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
    todoLi.innerText = "hey";

    todoDiv.appendChild(todoLi);

    //add a check button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = "<i class='fas fa-check'></i>";
    todoDiv.appendChild(checkBtn);
    
    //add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);
}
