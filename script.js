// Smooth Scroll for Navigation Links
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
        showAlert("Please enter a valid email address!", "error");
    } else {
        showAlert("Thank you for subscribing!", "success");
        emailInput.value = "";
    }
});

// Function to Validate Email
function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to Show Alerts (Success/Error)
function showAlert(message, type) {
    let alertBox = document.createElement("div");
    alertBox.className = `alert-box ${type}`;
    alertBox.innerText = message;

    document.body.appendChild(alertBox);
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

// Animate CTA Button on Hover
document.querySelector(".btn-warning").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
    this.style.transition = "0.3s";
});

document.querySelector(".btn-warning").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
});
