const body = document.getElementById("body");
const nav = document.getElementById("navbar");

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const navLinks = document.querySelectorAll(".nav-link");
const mobileLinks = document.querySelectorAll(".mobile-link");

let isDark = false;

themeToggle.addEventListener("click", () => {
  isDark = !isDark;

  if (isDark) {
    // 🌙 DARK MODE (PURE BLACK)
    body.classList.add("bg-black", "text-white");
    body.classList.remove("bg-white", "text-black");

    nav.classList.add("bg-black/80");
    nav.classList.remove("bg-white/80");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

    // nav links
    navLinks.forEach(link => {
      link.classList.add("text-gray-300", "hover:text-white");
      link.classList.remove("text-gray-600", "hover:text-black");
    });

    // mobile links
    mobileLinks.forEach(link => {
      link.classList.add("text-gray-300");
      link.classList.remove("text-black");
    });

  } else {
    // ☀️ LIGHT MODE (PURE WHITE)
    body.classList.add("bg-white", "text-black");
    body.classList.remove("bg-black", "text-white");

    nav.classList.add("bg-white/80");
    nav.classList.remove("bg-black/80");

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");

    // nav links
    navLinks.forEach(link => {
      link.classList.add("text-gray-600", "hover:text-black");
      link.classList.remove("text-gray-300", "hover:text-white");
    });

    // mobile links
    mobileLinks.forEach(link => {
      link.classList.add("text-black");
      link.classList.remove("text-gray-300");
    });
  }
});