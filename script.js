const menu = document.getElementsByClassName("menu-icon")[0]
const navbar = document.getElementsByClassName("navbar-links")[0]

menu.addEventListener("click", ()=> {
    menu.classList.toggle("menu-icon-active")
    navbar.classList.toggle("navbar-links-active")
})