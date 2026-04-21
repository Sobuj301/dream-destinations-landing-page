const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

const resourcesBtn = document.getElementById("resourcesBtn");
const resourcesDropdown = document.getElementById("resourcesDropdown");
const bookBtn = document.getElementById("bookBtn");

// =========================
// 1. MOBILE MENU TOGGLE
// =========================
menuBtn.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.contains("hidden");

  if (isHidden) {
    mobileMenu.classList.remove("hidden");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    closeMenu();
  }
});


// =========================
// 2. CLOSE MENU FUNCTION (REUSABLE)
// =========================
function closeMenu() {
  mobileMenu.classList.add("hidden");
  menuIcon.classList.remove("fa-xmark");
  menuIcon.classList.add("fa-bars");

  resourcesDropdown.classList.add("hidden");
}


// =========================
// 3. CLOSE MENU ON LINK CLICK
// =========================
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});


// =========================
// 4. RESOURCES DROPDOWN TOGGLE
// =========================
resourcesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resourcesDropdown.classList.toggle("hidden");
});


// =========================
// 5. BOOK BUTTON CLICK
// =========================
bookBtn.addEventListener("click", () => {
  closeMenu();
});


// =========================
// 6. CLICK OUTSIDE CLOSE MENU (PRO FIX)
// =========================
document.addEventListener("click", (e) => {
  const isInsideMenu = mobileMenu.contains(e.target);
  const isMenuBtn = menuBtn.contains(e.target);

  if (!isInsideMenu && !isMenuBtn) {
    closeMenu();
  }
});