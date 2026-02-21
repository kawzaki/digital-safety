// Header and Hero Parallax effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const heroTitle = document.getElementById('hero-title');
    const scrollY = window.scrollY;

    // Navbar effect
    if (scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Hero Title Parallax
    if (heroTitle && scrollY < window.innerHeight) {
        const initialOffset = window.innerHeight * 0.2; // Match 20vh from CSS
        const speed = 0.6;
        const newY = initialOffset - (scrollY * speed);
        heroTitle.style.transform = `translateY(${newY}px)`;
    }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    const scrollY = window.scrollY;

    revealElements.forEach(el => {
        const isHero = el.closest('.hero');

        if (isHero) {
            // Hero sub-elements ONLY reveal after scrolling 100px
            if (scrollY > 100) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        } else {
            // General reveal logic for other sections
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Initial check
revealOnScroll();

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
