const navbar = document.querySelector(".navBar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
})