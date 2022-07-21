// nav event

const hamburger = document.querySelector(".hamburger")
const list = document.querySelector(".list")
const parent1 = document.querySelector(".parent1")
hamburger.addEventListener("click",function(){
  hamburger.classList.toggle("active")
  list.classList.toggle("active")
  parent1.classList.toggle("active")
})

// scroll
