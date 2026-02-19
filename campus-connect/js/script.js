
const toggle = document.getElementById("themeToggle");

function setTheme(mode){
document.body.classList.toggle("dark-mode",mode==="dark");
localStorage.setItem("theme",mode);
}

toggle.onclick = () => {
const isDark = document.body.classList.contains("dark-mode");
setTheme(isDark ? "light":"dark");
};

const saved = localStorage.getItem("theme");
if(saved){
setTheme(saved);
}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){
setTheme("dark");
}
