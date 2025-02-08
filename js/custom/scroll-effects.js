window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.main-menu-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const headerSection = document.querySelector('.header_section');

    // Move the background image based on scroll position
    headerSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // Adjust multiplier for effect intensity
});
