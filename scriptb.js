// Smooth scroll for navigation links
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing effect
const typingText = "Hello, I'm Jyotirgamay Maurya - Aspiring Full Stack Developer";
let index = 0;
const typingElement = document.getElementById('typing');

function type() {
    if(index < typingText.length) {
        typingElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
type();

// Dark/Light Mode Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(section => {
        const elementTop = section.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            section.classList.add('active', 'reveal');
        }
    });

    // Back-to-Top Button
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Back-to-Top Button Click
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate Skills Progress Bars
const skillFills = document.querySelectorAll('.progress-fill');
window.addEventListener('scroll', () => {
    skillFills.forEach(fill => {
        const barTop = fill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(barTop < windowHeight - 50){
            fill.style.width = fill.getAttribute('data-width');
        }
    });
});
