let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header-logo-navbar .navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
