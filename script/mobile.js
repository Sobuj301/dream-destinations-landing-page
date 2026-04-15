const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

let open = false;

menuBtn.addEventListener("click", () => {
  open = !open;

  mobileMenu.classList.toggle("hidden");

  // icon toggle
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});