const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-[#0D9488]", "font-semibold");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-[#0D9488]", "font-semibold");
    }
  });
});