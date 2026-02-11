const textArray = [
  ".NET Developer",
  "C# & ASP.NET Core Specialist",
  "Angular & SQL Server Engineer",
  "Enterprise Application Developer"
];

let typingElement = document.querySelector(".typing");
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (index >= textArray.length) index = 0;

  currentText = textArray[index];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1200);
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index++;
    }
  }

  setTimeout(type, isDeleting ? 40 : 80);
}

type();
