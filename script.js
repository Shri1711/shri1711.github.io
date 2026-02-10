// Typing animation
const text = ".NET Developer | C# | ASP.NET Core | Angular | SQL Server";
let i = 0;
const speed = 70;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      r.classList.add("active");
    }
  });
});
