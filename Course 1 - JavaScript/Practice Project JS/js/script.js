var ratings = [
  "That's somewhere in North Gujarat.",
  "That's somewhere in South Gujarat (Surat).",
  "That's somewhere in Kathiyawad (East Gujarat).",
  "That's somewhere in West Gujarat.",
];
var height = 50;
var position = 0;
var scores = [0, 0, 0, 0];

// var questions = [
//   {
//     q: "When did you last eat fafda and jalebi?",
//     answers: [
//       { text: "A", effect: , region: N },
//       { text: "B", effect: , region: S },
//       { text: "Cr", effect: , region: E },
//       { text: "D", effect: , region: W },
//     ],
//   },

var questions = [
  {
    q: "When did you last eat fafda and jalebi?",
    answers: [
      { text: "This week", effect: 10, region: 2 },
      { text: "This year", effect: 7, region: 3 },
      { text: "Longer, if ever", effect: 5, region: 1 },
      { text: "What is fafda and jalebi?", effect: 3, region: 0 },
    ],
  },
  {
    q: "Wheer chhe tamaro ghar?",
    answers: [
      { text: "Uttran (North)", effect: 10, region: 0 },
      { text: "Varachha (South)", effect: 7, region: 1 },
      { text: "Gondal (East)", effect: 5, region: 2 },
      { text: "Mandvi (West)", effect: 3, region: 3 },
    ],
  },
  {
    q: "What's your favorite type of dhokla?",
    answers: [
      { text: "Khaman (North)", effect: 10, region: 0 },
      { text: "Nylon (South)", effect: 7, region: 1 },
      { text: "Khatta Dhokla (East)", effect: 5, region: 2 },
      { text: "Chana Dal Dhokla (West)", effect: 3, region: 3 },
    ],
  },
  {
    q: "In the evening, do you have...",
    answers: [
      { text: "Dinner", effect: -5, region: 0 },
      { text: "Supper", effect: -3, region: 1 },
      { text: "Tea", effect: 5, region: 2 },
      { text: "Snacks", effect: 10, region: 3 },
    ],
  },
  {
    q: "Which festival do you celebrate with more enthusiasm?",
    answers: [
      { text: "Uttarayan (North)", effect: 10, region: 0 },
      { text: "Navratri (South)", effect: 7, region: 1 },
      { text: "Diwali (East)", effect: 5, region: 2 },
      { text: "Holi (West)", effect: 3, region: 3 },
    ],
  },
  {
    q: "What's your preferred way of commuting?",
    answers: [
      { text: "BRTS (North)", effect: 10, region: 0 },
      { text: "Rickshaw (South)", effect: 7, region: 1 },
      { text: "Chakda (East)", effect: 5, region: 2 },
      { text: "Bullet Train (West)", effect: 3, region: 3 },
    ],
  },
];

var question = {};

function panel(id) {
  document.querySelectorAll(".panel").forEach(function (panel) {
    panel.style.display = "none";
  });
  document.getElementById(id).style.display = "table";
}

function startTest() {
  scores = [0, 0, 0, 0];
  setThermo();
  nextQuestion();
  panel("game");
}

function setThermo() {
  setMapPointer();
}

function setMapPointer() {
  const moveDiv = document.getElementById("move");
  moveDiv.style.top = 100 - height + "%";

  const region = Math.round((height / 100) * 3);
  console.log(`setMapPointer - Height: ${height}, Region: ${region}`);
  // scores[region] += 1;
  console.log(`Scores: ${scores}`);
}

function nextQuestion() {
  question = questions.splice(
    Math.floor(Math.random() * questions.length),
    1
  )[0];
  console.log(`Next Question: ${question.q}`);
  document.getElementById("game").querySelector("h2").textContent = question.q;
  var buttons = document.getElementById("game").querySelectorAll("button");
  buttons[0].textContent = question.answers[0].text;
  buttons[1].textContent = question.answers[1].text;
  buttons[2].textContent = question.answers[2].text;
  buttons[3].textContent = question.answers[3].text;
  console.log("////////");
}

function handleAnswer(id) {
  const selectedAnswer = question.answers[id];
  height += selectedAnswer.effect;

  scores[selectedAnswer.region] += 1;

  if (height > 100) {
    height = 100;
  }

  if (height < 0) {
    height = 0;
  }

  console.log(`handleAnswer(${id}) - Height: ${height}`);
  console.log(`Selected Answer: ${selectedAnswer.text}`);
  console.log(`Scores: ${scores}`);
  setThermo();

  if (questions.length) {
    nextQuestion();
    return;
  }

  gameOver();
}

function gameOver() {
  document.querySelector(".height").textContent = height.toString();

  const resultIndex = scores.indexOf(Math.max(...scores));
  console.log(`Final Scores: ${scores}`);
  console.log(`Result Index: ${resultIndex}`);
  console.log(`Final Rating: ${ratings[resultIndex]}`);
  document.getElementById("rating").textContent = ratings[resultIndex];
  panel("results");
}

document.addEventListener("DOMContentLoaded", function () {
  setThermo();
});

const moveDiv = document.getElementById("move");
const overDiv = document.getElementById("over");

const originalTop = moveDiv.offsetTop + "px";
const originalLeft = moveDiv.offsetLeft + "px";

function resetCoordinates() {
  moveDiv.style.top = originalTop;
  moveDiv.style.left = originalLeft;
}

const materialSymbols = document.querySelectorAll(".material-symbols-rounded");

function resetScale() {
  this.style.transform = "scale(2)";
  this.style.transition = "none";
}

materialSymbols.forEach((symbol) => {
  if (symbol.textContent.trim() === "location_on") {
    symbol.addEventListener("mouseover", function () {
      this.style.transform = "scale(2.2)";
      this.style.transition = "transform 0.3s ease-in-out";
    });

    symbol.addEventListener("mouseout", resetScale);
    symbol.addEventListener("click", resetScale);
  }
});
