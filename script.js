const menuBtn = document.getElementById("menu-button");
const menu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
