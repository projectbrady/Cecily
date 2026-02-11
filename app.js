const toggleBtn = document.getElementById("cecily");
const text = document.getElementById("display-text");
const image = document.getElementById("suprise-img");
const surpriseContent = document.getElementById("surprise-content");
const audio = document.getElementById("sound");

toggleBtn.addEventListener("click", () => {
  const isPressed = toggleBtn.getAttribute("aria-pressed") !== "true";
  toggleBtn.setAttribute("aria-pressed", isPressed);

  text.classList.toggle("hidden", isPressed);
  surpriseContent.classList.toggle("hidden", !isPressed);

  if (isPressed) {
    audio.currentTime = 0;
    audio.play().catch((err) => console.log("Audio blocked:", err));
    audio.classList.remove("hidden");
  } else {
    audio.pause();
    audio.currentTime = 0;
    audio.classList.add("hidden");
  }
});
