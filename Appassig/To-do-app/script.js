var taskInput = document.getElementById("add-task")
var addButton = document.getElementById("addButton")
var tasksList = document.querySelector(".tasks")


function addTask() {
    var taskText = taskInput.value;


    if(taskText===""){
         alert("Task cannot be empty!")
         return;
    }
    
    var li = document.createElement("li")
    li.textContent = taskText
    tasksList.appendChild(li)

    taskInput.value = "";

}

addButton.onclick = addTask;



