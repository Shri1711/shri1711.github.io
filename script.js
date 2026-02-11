// Typing Effect
const typingElement = document.querySelector(".typing");

const texts = [
    ".NET Developer",
    "Backend API Engineer",
    "Angular Integrator",
    "Enterprise Application Builder"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = texts[textIndex];

    if (isDeleting) {
        typingElement.textContent = current.substring(0, charIndex--);
    } else {
        typingElement.textContent = current.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// Skill Animation
const skillFills = document.querySelectorAll(".skill-fill");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width;
        }
    });
}, { threshold: 0.5 });

skillFills.forEach(skill => observer.observe(skill));
