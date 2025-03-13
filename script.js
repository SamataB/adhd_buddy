// Smooth Scroll for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// CTA Button Hover Effect
document.querySelector(".btn-warning").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
    this.style.transition = "0.3s";
});

document.querySelector(".btn-warning").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
});
