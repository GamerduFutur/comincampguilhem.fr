// Slideshow page accueil sans transition
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

if (slides.length > 0) {
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 4000);
}

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menu && !nav.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// Slider pour page projet
let currentProjectSlide = 0;
const projectSlides = document.querySelectorAll('.project-slide');

function changeSlide(direction) {
    if (projectSlides.length > 0) {
        projectSlides[currentProjectSlide].classList.remove('active');
        currentProjectSlide = (currentProjectSlide + direction + projectSlides.length) % projectSlides.length;
        projectSlides[currentProjectSlide].classList.add('active');
    }
}