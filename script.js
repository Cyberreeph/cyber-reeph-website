// Typing effect
const textArray = ["Web Pentesting", "Network Security", "Cloud Security"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  const typingElement = document.querySelector(".typing");
  if (typingElement) {
    if (!isDeleting && j <= textArray[i].length) {
      currentText = textArray[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = textArray[i].substring(0, j--);
    }

    typingElement.textContent = currentText;

    if (j === textArray[i].length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % textArray.length;
    }
    setTimeout(type, isDeleting ? 80 : 120);
  }
}
type();

// Reveal on scroll
const elements = document.querySelectorAll("[data-animate]");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
