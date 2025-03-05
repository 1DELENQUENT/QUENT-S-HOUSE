// Smooth Scrolling
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        // Smooth scrolling to the target element
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for the height of the header
            behavior: 'smooth'
        });
    });
});

// Animate sections when they come into view
const sections = document.querySelectorAll('section');

const animateOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        // Add 'visible' class when section is in view
        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
};

// Listen for scroll event
window.addEventListener('scroll', animateOnScroll);

// Run once when the page loads to check the initial visibility
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Toggle Navbar for smaller screens (Optional)
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;';
document.querySelector('header').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});
