const menuBar = document.querySelector(".menu-bar");
const links = document.querySelector(".left-links");

menuBar.addEventListener("click",() =>{
  links.classList.toggle("show-links");
})
