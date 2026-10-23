fetch("component/header.html")
.then(response=>response.text())
.then(data=>{
    document.querySelector(".header").innerHTML=data;


let mobileBars=document.querySelector(".mobile-bars")
let humBurger=document.getElementById("humburger")
mobileBars.addEventListener("click",()=>{
    humBurger.classList.toggle("hidden")
})


})