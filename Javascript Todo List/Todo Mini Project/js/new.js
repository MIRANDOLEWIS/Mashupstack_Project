const todoInput = document.querySelector("todo-input")
const todoButton = document.querySelector("todo-button")
const todoList = document.querySelector("todo-list")

todoButton.addEventListener("click",addtodo)

function addtodo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")

    const newlist = document.createElement("li")
    newlist.classList.add("todo-items")
    newlist.innerText = "hello"
    todoDiv.append(newlist)

    const completebutton = document.createElement("button");
    completebutton.classList.add("complete-button");
    completebutton.innerHTML = '<i class ="fas fa-check"></i>';
    todoDiv.append(completebutton)

    const trashbutton = document.createElement("button");
    trashbutton.classList.add("trash-button")
    trashbutton.innerHTML = '<i class ="fas fa-trash"></i>';
    todoDiv.append(trashbutton)

    todoList.append(todoDiv)
}