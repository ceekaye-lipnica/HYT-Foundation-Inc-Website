// TOGGLE MENU 
const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".banner-header-bot-nav");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headNav.classList.toggle("open");
});
