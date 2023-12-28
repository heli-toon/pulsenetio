// Cacheing theme
const body = document.body;
const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

function toggleDarkMode() {
  if (body.classList.contains("light")) {
    body.classList.toggle("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
}
const logo = document.querySelector(".logo");
const searchBox = document.querySelector(".search-box");
const searchLink = document.querySelector(".search-box a");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".submit-search");

searchLink.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchInput.style.width = "8.5rem";
  searchButton.style.display = "flex";
  searchBox.style.display = "flex";
  searchBox.style.width = "13rem";
  logo.style.display = "none";
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("serviceWorker.js")
    .then((registration) => {
      console.log("Service Worker Registered");
      console.log(registration);
    })
    .catch((error) => {
      console.log("Service Worker Registration failed!");
      console.log(error);
    });
}
