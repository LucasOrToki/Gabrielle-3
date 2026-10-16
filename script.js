const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const buttonsArea = document.getElementById("buttons-area");
const tinyNote = document.getElementById("tiny-note");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalOk = document.getElementById("modal-ok");
const loveMessage = document.getElementById("love-message");

const personalMessage = `Minha querida fofuxa, palavras se tornam poucas quando tento expressar o quanto a amo, a cada dia que passa, esse sentimento martelando em meu peito, se torna mais intenso.

Cada hora, minuto, segundo... todos são importantes, você alegra a minha tristeza, cura meu cansaço, TIRA MEU SONO RS e ainda tem a audácia de me fazer falar essas coisas boiolas (você é minha taradinha, toda minha).

Quero te tornar parte de minha rotina, se tornou meu sonho, acordar e ver você toda velha e descabelada em minha cama muehehehe.

Eu não quero ser muito repetitivo, só quero mostrar que te amo de uma maneira diferente, este será o primeiro de muitos, minha amada.

De: Luscas

Para: Tarada Linda Totosa Amo muito Gabrielle 💖`;

function openSurprise() {
  loveMessage.textContent = personalMessage;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  closeModal.focus();
  makeConfettiHearts();
}
function closeSurprise() {
  modal.hidden = true;
  document.body.style.overflow = "";
  yesButton.focus();
}
yesButton.addEventListener("click", openSurprise);
closeModal.addEventListener("click", closeSurprise);
modalOk.addEventListener("click", closeSurprise);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeSurprise();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeSurprise();
});

function moveNoButton() {
  const area = buttonsArea.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  const maxX = Math.max(0, area.width - button.width);
  const x = Math.random() * maxX;
  const y = (Math.random() * 2 - 1) * 65;
  noButton.style.position = "relative";
  noButton.style.left = `${x - maxX / 2}px`;
  noButton.style.top = `${y}px`;
  tinyNote.textContent = "Hehe, tenta de novo! 🙈💗";
}
noButton.addEventListener("pointerenter", moveNoButton);
noButton.addEventListener("focus", moveNoButton);
noButton.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
  tinyNote.textContent = "Esse botão está tímido... escolhe o Sim! 🥹";
});

function makeConfettiHearts() {
  const symbols = ["♥", "♡", "💗", "💕", "💖"];
  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.position = "fixed";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = "-30px";
    heart.style.zIndex = "20";
    heart.style.pointerEvents = "none";
    heart.style.fontSize = `${16 + Math.random() * 20}px`;
    heart.style.color = ["#e85d91", "#f28bb5", "#c43c76"][Math.floor(Math.random() * 3)];
    heart.style.transition = `transform ${2 + Math.random() * 2}s ease-in, opacity 3s ease`;
    document.body.appendChild(heart);
    requestAnimationFrame(() => {
      heart.style.transform = `translate(${Math.random() * 120 - 60}px, ${window.innerHeight + 80}px) rotate(${Math.random() * 360}deg)`;
      heart.style.opacity = "0";
    });
    setTimeout(() => heart.remove(), 4200);
  }
}
