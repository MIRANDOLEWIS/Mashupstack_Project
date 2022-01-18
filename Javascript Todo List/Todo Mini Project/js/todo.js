//Selector

const todoinput = document.querySelector(".todo-input")
const todobutton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")
const todoSearch = document.forms["forms"].querySelector("input")

//Event Listeners

todobutton.addEventListener('click',addTodo)
todolist.addEventListener('click',deleteCheck)
filterOption.addEventListener('click',filterTodo)
todoSearch.addEventListener("keyup",searchTodo)


//Functions

function addTodo(event){
 
      event.preventDefault();


      //create a div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");


      //create a list
      const newlist = document.createElement("li");
      newlist.classList.add("todo-items");
      newlist.innerText = todoinput.value;
      todoDiv.appendChild(newlist)


      //create a completebutton
      const completebutton = document.createElement("button");
      completebutton.innerHTML = '<i class ="fas fa-check"></i>'
      completebutton.classList.add("complete-btn");
      todoDiv.appendChild(completebutton)
      
      //create a trashbutton
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class ="fas fa-trash"></i>'
      trashButton.classList.add("trash-btn")
      todoDiv.appendChild(trashButton)
      
      //Adding to the list
      todolist.appendChild(todoDiv)
      
      // input 
      todoinput.value ="";

}



function deleteCheck(e){
    const items = e.target

    if(items.classList[0]==="trash-btn"){
        const todo = items.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){

        todo.remove()
        })
       
    }

    if(items.classList[0] === "complete-btn"){
        const todo = items.parentElement;
        todo.classList.toggle("completed")
    }


}

function filterTodo(e) {
    const todos = todolist.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}


function searchTodo(event){

    const term = event.target.value.toLowerCase();
    const items = todolist.getElementsByTagName('li');

    Array.from(items).forEach(function(item){

        const getItem = item.textContent;
        if (getItem.toLowerCase().indexOf(term)!= -1){
            item.style.display = "flex";
        } else {
            item.style.display = "none";
            
        }
});
}