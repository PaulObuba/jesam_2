const nav = document.querySelector("nav");
const menuIcon = document.querySelector("#menu-btn");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-times");
  nav.classList.toggle("mobile");
}