// Smooth Scroll for Navigation
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Email Validation in Subscription Box
document.querySelector(".btn-primary").addEventListener("click", function() {
    let emailInput = document.querySelector("input[type='email']");
    let emailValue = emailInput.value.trim();

    if (!validateEmail(emailValue)) {
        alert("Please enter a valid email address!");
    } else {
        alert("Thank you for subscribing!");
        emailInput.value = "";
    }
});

// Email Validation Function
function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Animate Hero Section on Load
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hero").classList.add("animate-hero");
});
