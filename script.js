// Typing animation
const text = "Shrinivas Umanwar | .NET Developer";
let index = 0;
const speed = 80;

function typeEffect() {
  if (index < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

// Scroll animation
const reveals = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-full");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("reveal-active");
    }
  });
});
