// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animate Skill Bars
const skillFills = document.querySelectorAll(".skill-fill");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute("data-width");
            entry.target.style.width = width;
        }
    });
}, { threshold: 0.5 });

skillFills.forEach(skill => {
    observer.observe(skill);
});
