// console.dir(window.document);

// ADDS A NEW LIST ITEM
var formEl = document.querySelector("#task-form");
// var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
// console.log(buttonEl);
// buttonEl.addEventListener("click", function() {
var taskFormHandler = function (event) {   //ORIGINAL HANDLER
   
    // console.log(event);
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;


    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();
    //package up data as an obj
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    
    // createTaskEl(taskDataObj);
    var createTaskEl = function (taskDataObj) {
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    }

    // THIS SELECTS THE ELEMENTS TO BE INPUT TO DISPLAY
    // console.log(taskTypeInput);
    // console.log(taskNameInput);
    // console.dir(taskNameInput);
    var listItemEl = document.createElement("li"); //create list item
    listItemEl.className = "task-item";


    //CREATE DIV TO HOLD TASK INFO AND ADD TO LIST ITEM
    var taskInfoEl = document.createElement("div");
    // give it a class name?
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    // listItemEl.appendChild(taskInfoEl);

    //add entire list item to list?
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);

var listItemEl = document.createElement("li");
listItemEl.className = "task-item";
listItemEl.textContent = taskNameInput;
//    listItemEl.textContent = "This is a new task.";   
tasksToDoEl.appendChild(listItemEl);
// alert("button clicked");
;
var createTaskEl = function (taskDataObj) {
}
formEl.addEventListener("submit", taskFormHandler);
//   buttonEl.addEventListener("click", taskFormHandler);



