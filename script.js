const currentYear = document.getElementById("currentYear");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}
