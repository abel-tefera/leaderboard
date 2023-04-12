// import { createNewGame } from "./api/createNewGame";
import { getScores } from "./api/getScores";
import { postScore } from "./api/postScore";
import "./style.css";

const recentScores = document.querySelector(".recent-scores");

const createUI = async (re) => {
  const scores = await getScores();
  if (re) {
    recentScores.innerHTML = "";
  }
  const scoresDiv = document.createElement("div");
  scoresDiv.classList.add("scores-div");
  const scoresText = scores
    .map(({ user, score }) => `<span>${user}: ${score}</span>`)
    .join("\n");
  scoresDiv.innerHTML = scoresText;
  recentScores.appendChild(scoresDiv);
};

const refreshBtn = document.querySelector(".btn-refresh");
refreshBtn.addEventListener("click", () => {
  createUI(true);
});

createUI();

const scoreForm = document.querySelector('.score-form');
scoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userInput = document.querySelector('.user-input');
  const user = userInput.value;

  const scoreInput = document.querySelector('.score-input');
  const score = scoreInput.value;

  await postScore(user, score);
  createUI(true);

  userInput.value = '';
  scoreInput.value = '';
})

// createNewGame();
