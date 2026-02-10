// Typing Effect
const text = ".NET Developer | C# | Angular | SQL Server";
let index = 0;
const speed = 80;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      section.classList.add("active");
    }
  });
});
