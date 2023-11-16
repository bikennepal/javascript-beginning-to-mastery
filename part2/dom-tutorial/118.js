// static vs live list 

const liItems=document.querySelector(".todo-list");
const sixthli=document.createElement("li");
sixthli.textContent="item 6";
const ul=document.querySelector(".todo-list");
ul.append(sixthli);
console.log(liItems)
