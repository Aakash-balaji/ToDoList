const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

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
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "\u00d7";
        deleteButton.addEventListener("click", function() {
            deleteTask(li);
        });
        li.appendChild(deleteButton);

        listContainer.appendChild(li);
    }

    inputBox.value = '';
    saveData();
}

function editTask(task) {
    let newText = prompt("Edit task:", task.textContent);
    if (newText !== null) {
        task.textContent = newText;
        saveData();
    }
}

function deleteTask(task) {
    task.remove();
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "BUTTON") {
        // Do nothing if the button is clicked (Delete)
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('.toggle-item');  

    button.addEventListener('click', function() {
        let cont = document.querySelector('.container');
        cont.classList.toggle('dark-mode');
    });

    let btn = document.querySelector(".toggle-item")
    btn.addEventListener("click", function() {
        let cont = document.querySelector(".toggle-item");
        cont.classList.toggle("right")

        let contt = document.querySelector(".toggle-con")
        contt.classList.toggle("dark")

        let con = document.querySelector(".todo")
        con.classList.toggle("todark")

        let conlist = document.querySelector(".list-div")
        conlist.classList.toggle("darklist")
    });
});
