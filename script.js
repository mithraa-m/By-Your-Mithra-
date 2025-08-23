// --- Typewriter intro ---
const intro = document.getElementById("intro");

const messages = [
  "To my favorite boy...",
  "My most special person...",
  "Mrithveen Thangameyy ❤️"
];

let msgIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (msgIndex < messages.length) {
    if (charIndex < messages[msgIndex].length) {
      intro.innerHTML += messages[msgIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100); // typing speed
    } else {
      intro.innerHTML += "<br>"; // new line after each sentence
      msgIndex++;
      charIndex = 0;
      setTimeout(typeWriter, 700); // delay before next line
    }
  }
}
typeWriter();

// --- Tap button event ---
const tapBtn = document.getElementById("tap");
const hidden = document.getElementById("hidden");
const photo = document.getElementById("photo");
const para = document.getElementById("para");

tapBtn.addEventListener("click", () => {
  hidden.style.display = "block";
  setTimeout(() => { photo.style.opacity = 1; }, 200);
  setTimeout(() => { para.style.opacity = 1; }, 2500);

  // hearts & kisses fall
  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.classList.add("fall");
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.innerText = Math.random() > 0.5 ? "❤️" : "😘";
    document.body.appendChild(emoji);

    setTimeout(() => { emoji.remove(); }, 8000);
  }, 900); // slower speed
});
