
  // JavaScript function to toggle the visibility of the navigation items
  function toggleNavMenu() {
    var navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('show');
}

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

        let nav = document.querySelector('nav')
        nav.classList.toggle('nav-dark')

        let body = document.querySelector('body')
        body.classList.toggle('body-dark')

    })
   

});