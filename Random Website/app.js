const toggleBtn = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");
const registerBtn = document.querySelector(".register-container");

toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    registerBtn.classList.toggle("active-register");
});