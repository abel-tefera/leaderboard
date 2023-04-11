import "./style.css";

const scores = [
  {
    name: "Abel",
    score: 100,
  },
  {
    name: "Abel",
    score: 100,
  },
  {
    name: "Abel",
    score: 100,
  },
  {
    name: "Abel",
    score: 100,
  },
  {
    name: "Abel",
    score: 100,
  },
];

const recentScores = document.querySelector('.recent-scores');
const scoresDiv = document.createElement('div');
scoresDiv.classList.add('scores-div')
const scoresText = scores.map(({name, score}) => (`<span>${name}: ${score}</span>`)).join('\n');
scoresDiv.innerHTML = scoresText;
recentScores.appendChild(scoresDiv);
