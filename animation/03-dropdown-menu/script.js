const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
    dropdownMenu.classList.toggle("collapse");
    dropdownMenu.style.display = "";
  } else {
    dropdownMenu.classList.toggle("collapse");
  }
});

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.add("collapse");
    dropdownMenu.classList.remove("visible");
  }
});
