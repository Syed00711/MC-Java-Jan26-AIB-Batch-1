function userScroll()
{
    const navbar = document.querySelector(".navbar");

    window.addEventListener('scroll', (e) =>
    {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-dark")
            navbar.classList.add("bg-opacity-75")
        } else {
            navbar.classList.remove("bg-dark")
        }
    });
}

document.addEventListener("DOMContentLoaded", userScroll);