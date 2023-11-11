const ul = document.querySelector(".cards-list");
const cards = document.querySelectorAll(".cards-item");
const startBtn = document.querySelector(".start-btn");
let userName = document.querySelector(".user");
const stepsCount = document.querySelector(".steps");
const input = document.querySelector(".input.text");
const enter = document.querySelector(".input.submit");
const header = document.querySelector(".header");

const users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);
const user = { name: input.value, score: stepsCount.textContent };

enter.addEventListener("click", (e) => {
  e.preventDefault();
  userName.textContent = input.value;
  user.name = userName.textContent;
  users.push(user);
  console.log(users);
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    userName.textContent = input.value;
    input.value = "";
    user.name = userName.textContent;
    users.push(user);
  }
});

startBtn.addEventListener("click", startNewGame);

cards.forEach((card) => {
  card.addEventListener("click", rotateCard);
});

let steps = 0;
let isFlipped = false;
let lockBoard = false;
let isFinished = false;
let firstCard, secondCard;

function rotateCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
    return;
  }

  secondCard = this;

  matchCards();
  if (Array.from(cards).every((card) => card.classList.contains("flip"))) {
    isFinished = true;
  }

  if (isFinished) {
    alert(`You win!\nYour score is ${stepsCount.textContent}`);
    saveScore();
  }
}

function matchCards() {
  let isMatch = firstCard.dataset.index === secondCard.dataset.index;

  isMatch ? disableCards() : unflipCards();
  displaySteps();
}

function disableCards() {
  firstCard.removeEventListener("click", rotateCard);
  secondCard.removeEventListener("click", rotateCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [isFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function startNewGame() {
  // saveScore();
  // const divName = document.querySelector(".name");
  // divName.style.display = "none";
  ul.style.visibility = "visible";
  resetBoard();
  cards.forEach((card) => {
    card.classList.remove("flip");
  });
  mixCards();
  steps = 0;
  stepsCount.textContent = steps;
}

function displaySteps() {
  stepsCount.textContent = ++steps;
}

function mixCards() {
  cards.forEach((card) => {
    let num = [...Array(cards.length).keys()];
    let random = Math.floor(Math.random() * cards.length);

    card.style.order = num[random];
  });
}

function saveScore() {
  const names = users.map((user) => user.name);
  if (names.includes(user.name)) user.score = steps;
  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));
}

// top 10
const top10 = JSON.parse(localStorage.getItem("top10")) || [];
