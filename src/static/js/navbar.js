/**
 * Provides functionality for opening and closing the navbar on mobile
 */
const mainNav = document.getElementById("mainNav");
const navOpener = mainNav.querySelector(".toggleNavOpen");
const navCloser = mainNav.querySelector(".toggleNavClosed");
const mainNavSidebar = mainNav.querySelector(".sidebar");

function openNav() {
  mainNavSidebar.classList.remove("translate-x-full");
}

function closeNav() {
  mainNavSidebar.classList.add("translate-x-full");
}

document.addEventListener("click", (e) => {
  // Check if the click is outside the mainNavSidebar and the nav is open
  if (!mainNavSidebar.contains(e.target)) {
    closeNav();
  }
});

navOpener.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the document click listener from closing the nav immediately
  openNav();
});

navCloser.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the document click listener from closing the nav immediately
  closeNav();
});
