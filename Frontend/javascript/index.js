const modal = document.getElementById("modal");
const openModal = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// fermer en cliquant dehors
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});