// console.dir(window.document);

// ADDS A NEW LIST ITEM
var formEl = document.querySelector("#task-form");
// var buttonEl = document.querySelector("#save-task");
var tasksToDoEl= document.querySelector("#tasks-to-do");

// console.log(buttonEl);

// buttonEl.addEventListener("click", function() {
var createTaskHandler = function(){
    // console.log(event);
    event.preventDefault();


   var listItemEl = document.createElement("li");
   listItemEl.className = "task-item";
   listItemEl.textContent = "This is a new task.";
   tasksToDoEl.appendChild(listItemEl);
    // alert("button clicked");
  };

  formEl.addEventListener("submit", createTaskHandler);
//   buttonEl.addEventListener("click", createTaskHandler);



