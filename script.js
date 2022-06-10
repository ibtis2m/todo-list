let addTodoButton=document.getElementById("addTodo");
let toDoContainer=document.getElementById("todocontainer");
let inputField= document.getElementById("inputField");


addTodoButton.addEventListener('click',function(){
var paragraph =document.createElement('p')
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText=inputField.value;
  
  toDoContainer.appendChild(paragraph);
  inputField.value="";
  paragraph.addEventListener('click',function(){


    paragraph.style.textDecoration="line-through";
    paragraph.style.background="rgb(184, 139, 240)";
  })



  
})