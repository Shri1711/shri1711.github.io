// Typing effect
const text = ".NET Developer | ASP.NET Core | Angular";
let i = 0;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

// Scroll animation
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Trigger initial
window.dispatchEvent(new Event("scroll"));
