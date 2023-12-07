const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Add double-click event for editing
        li.addEventListener("dblclick", function() {
            editTask(li);
        });

        // Add Delete button
        let deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00d7";
        deleteButton.addEventListener("click", function() {
            // deleteTask(li);
        });
        li.appendChild(deleteButton);

        listContainer.appendChild(li);
    }

    inputBox.value = '';
    saveData();
}


// this is for edit functionality 
function editTask(task) {
    let newText = prompt("Edit task:", task.textContent );
    if (newText !== null) {
        task.textContent = newText;
        saveData();
    }
}

// function deleteTask(task) {
//     task.remove();
//     saveData();
// }


// this is for checked and delete 
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
});

// save to localStorage function 
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// show from the localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

