
let array = ["India", "United States", "China", "Japan", "Germany", "United Kingdom", "France", "Italy", "Brazil", "Canada"];
let ol = document.createElement('ol');

for (var i = 0; i < array.length; i++) {
    let li = document.createElement('li');
    li.textContent = array[i]; 
    ol.appendChild(li); 
}

document.body.appendChild(ol); 


console.log();

let firstP = document.querySelector("p")
firstP.style.backgroundColor="yellow"
console.log(firstP);

let p1 = document.querySelector('#two')
p1.style.backgroundColor="gold"
console.log(two);
let p2 = document.querySelector('#one')
p2.style.backgroundColor="blue"
console.log(one);
let p3 = document.querySelector('#three')
p3.style.backgroundColor="brown"
console.log(three);
let p4 = document.querySelector('#four')
p4.style.backgroundColor="red"
console.log(four);

let allP = document.querySelectorAll("p")
// allP.style.backgroundColor="yellow"
console.log(allP);

let pOf = document.querySelectorAll("p")[3]
pOf.style.backgroundColor="gold"
pOf.textContent = "this is forth para"
console.log(pOf);

let paragraphs = document.querySelectorAll("p")
// paragraphs.style.backgroundColor="yellow"

for(let i=0;i<paragraphs.length;i++){
    paragraphs[i].id="para" + (i + 1)
    p1.textContent
    paragraphs[i].classList.add("text");
    // paragraphs[i].className ='name'
    // paragraphs[i].setAttribute("class","akash")
}


paragraphs[0].style.color="red"

var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "brown", "black"];

var h1=document.querySelector("h1")
var i=0;
setInterval(()=> h1.style.backgroundColor=colors[i<colors.length?i++:i=0],200)

