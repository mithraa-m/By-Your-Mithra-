const tapScreen = document.getElementById("tap-screen");
const mainScreen = document.getElementById("main-screen");
const photoContainer = document.getElementById("photo-container");
const typewriter = document.getElementById("typewriter");

let text = "To my favorite boy, my most special person…";
let i = 0;

// Tap screen → show next screen
tapScreen.addEventListener("click", () => {
  tapScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
  typeWriter();
  startFalling();
  setTimeout(() => {
    photoContainer.classList.remove("hidden");
    photoContainer.classList.add("show");
  }, 4000); // after typewriter
});

// Typewriter (slower speed)
function typeWriter() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 120); // slower typing
  }
}

// Falling Hearts & Kisses
function startFalling() {
  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.innerHTML = Math.random() > 0.5 ? "💋" : "💖";
    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = Math.random() * 20 + 20 + "px";
    emoji.style.top = "-20px";
    emoji.style.animation = "fall 6s linear forwards"; // slower fall
    document.body.appendChild(emoji);

    setTimeout(() => emoji.remove(), 7000);
  }, 800);
}

// CSS Falling animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
