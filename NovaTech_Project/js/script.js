const toggle = document.getElementById("darkModeToggle");

function setTheme(theme){
document.documentElement.setAttribute("data-bs-theme", theme);
localStorage.setItem("theme", theme);
}

toggle.addEventListener("click", () => {
const current = document.documentElement.getAttribute("data-bs-theme");
setTheme(current === "dark" ? "light" : "dark");
});

(function () {
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (prefersDark ? "dark" : "light"));
})();