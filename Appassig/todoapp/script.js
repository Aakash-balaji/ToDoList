
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value===''){
        alert("you must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }

    inputBox.value = '';
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML) || []
}

function showTask(){
   listContainer.innerHTML = localStorage.getItem("data")
}

showTask()



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

    })
   

});





