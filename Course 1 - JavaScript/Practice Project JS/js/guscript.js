var ratings = [
  "ઉત્તર ગુજરાતમાં.",
  " દક્ષિણ ગુજરાત (સુરત)માં.",
  " પૂર્વ ગુજરાતમાં.",
  " કાઠિયાવાડ (પશ્ચિમ ગુજરાતમાં).",
];
// var questions = [
//   {
//     q: "When did you last eat fafda and jalebi?",
//     answers: [
//       { text: "A", effect:10, region: N },
//       { text: "B", effect: 7, region: S },
//       { text: "C", effect: 5, region: E },
//       { text: "D", effect: 3, region: W },
//     ],
//   },

var questions = [
  {
    q: "તમે છેલ્લે ફાફડા અને જલેબી ક્યારે ખાધા?",
    answers: [
      { text: "આ અઠવાડિયે", effect: 10, region: 2 },
      { text: "આ વર્ષે", effect: 7, region: 3 },
      { text: "લાંબા સમય અગાઉ, જો ક્યારેય ખાધા હોય", effect: 5, region: 1 },
      { text: "ફાફડા અને જલેબી શું છે?", effect: 3, region: 0 },
    ],
  },
  {
    q: "તમારો પ્રિય બ્રેવરેજ શું છે?",
    answers: [
      { text: "ચા", effect: 10, region: 3 },
      { text: "કૉફી", effect: 7, region: 0 },
      { text: "છાછ", effect: 5, region: 2 },
      { text: "છાસ", effect: 3, region: 1 },
    ],
  },
  {
    q: "તમને કયો પ્રકારનો ઢોકળા સૌથી વધુ ગમે છે?",
    answers: [
      { text: "ખમણ ", effect: 10, region: 3 },
      { text: "નાયલોન ", effect: 7, region: 2 },
      { text: "ખાટા ઢોકળા ", effect: 5, region: 0 },
      { text: "ચણા દાળ ઢોકળા ", effect: 3, region: 3 },
    ],
  },
  {
    q: "સાંજે, તમારી પાસે શું હોય છે?",
    answers: [
      { text: "Dinner", effect: 10, region: 2 },
      { text: "રાત્રિભોજન", effect: 7, region: 3 },
      { text: "ચા", effect: 5, region: 1 },
      { text: "નાસ્તો", effect: 3, region: 0 },
    ],
  },
  {
    q: "તમે કયો તહેવાર વધુ ઉત્સાહ સાથે ઉજવો છો?",
    answers: [
      { text: "ઉત્તરાયણ ", effect: 10, region: 2 },
      { text: "નવરાત્રી ", effect: 7, region: 1 },
      { text: "દિવાળી ", effect: 5, region: 3 },
      { text: "હોળી ", effect: 3, region: 0 },
    ],
  },
  {
    q: "તમારી મુસાફરી કરવાની પસંદગીની રીત શું છે?",
    answers: [
      { text: "BRTS ", effect: 10, region: 2 },
      { text: "રિક્ષા ", effect: 7, region: 1 },
      { text: "છકડો ", effect: 5, region: 3 },
      { text: "બુલેટ ટ્રેન ", effect: 3, region: 0 },
    ],
  },
];

var ratingsTranslation = [
  " ઉત્તર ગુજરાતમાં.",
  " દક્ષિણ ગુજરાત (સુરત)માં.",
  " પૂર્વ ગુજરાતમાં.",
  " કાઠિયાવાડ (પશ્ચિમ ગુજરાતમાં).",
];

var height = 50;
var position = 0;
var scores = [0, 0, 0, 0];

var question = {};

function panel(id) {
  document.querySelectorAll(".panel").forEach(function (panel) {
    panel.style.display = "none";
  });
  document.getElementById(id).style.display = "table";
}
// panel("results");
function startTest() {
  scores = [0, 0, 0, 0];
  // console.log("test starts");
  setThermo();
  nextQuestion();
  panel("game");
}

function setThermo() {
  setMapPointer();
}

function setMapPointer() {
  const moveDiv = document.getElementById("move");
  // Generate random x and y coordinates
  const randomX = Math.random() * 50;
  const randomY = Math.random() * 50;
  moveDiv.style.left = Math.floor(Math.random() * 50) + "%";
  moveDiv.style.transform = `translate(${randomX}px, ${randomY}px)`;

  const region = Math.round((height / 100) * 3);
  // console.log(`setMapPointer - Height: ${height}, Region: ${region}`);
  // scores[region] += 1;
  // console.log(`ScoreXXs: ${scores}`);
}

function nextQuestion() {
  question = questions.splice(
    Math.floor(Math.random() * questions.length),
    1
  )[0];
  // console.log(`Next Question: ${question.q}`);
  document.getElementById("game").querySelector("h2").textContent = question.q;
  var buttons = document.getElementById("game").querySelectorAll("button");
  buttons[0].textContent = question.answers[0].text;
  buttons[1].textContent = question.answers[1].text;
  buttons[2].textContent = question.answers[2].text;
  buttons[3].textContent = question.answers[3].text;
  // console.log("////////");
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

  // console.log(`handleAnswer(${id}) - Height: ${height}`);
  // console.log(`Selected Answer: ${selectedAnswer.text}`);
  // console.log(`Scores: ${scores}`);
  setThermo();

  if (questions.length) {
    nextQuestion();
    return;
  }

  gameOver();
}
function gameOver() {
  document.querySelector(".height").textContent = height.toString();
  // Determine the final result based on the scores
  const resultIndex = scores.indexOf(Math.max(...scores));
  const regionLabels = [" ઉત્તરના", "સુરતી", "અમદાવાદી", "કાઠિયાવાડી"];
  const moveDiv = document.getElementById("move");
  const overDiv = document.getElementById("over");
  document.getElementById("cardinal").textContent = regionLabels[resultIndex];
  document.getElementById("rating").textContent = ratings[resultIndex];

  if (regionLabels[resultIndex] == "ઉત્તરના") {
    moveDiv.classList.add("north");
    moveDiv.style.left = 19 + "%";
    // console.log(regionLabels[resultIndex]);
  }
  if (regionLabels[resultIndex] == "સુરતી") {
    moveDiv.classList.add("south");
    moveDiv.style.left = 37 + "%";
    // console.log(regionLabels[resultIndex]);
  }
  if (regionLabels[resultIndex] == "અમદાવાદી") {
    moveDiv.classList.add("east");
    moveDiv.style.left = 35 + "%";
    // console.log(regionLabels[resultIndex]);
  }
  if (regionLabels[resultIndex] == "કાઠિયાવાડી") {
    moveDiv.classList.add("western");
    moveDiv.style.left = 20 + "%";
    // console.log(regionLabels[resultIndex]);
  }
  panel("results");
}
const moveDiv = document.getElementById("move");
const overDiv = document.getElementById("over");

document.addEventListener("DOMContentLoaded", function () {
  setThermo();
});
moveDiv.classList.add("init");

function resetCoordinates() {
  const moveDiv = document.getElementById("move");
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

function shareResult() {
  // Capture the screenshot of the result panel
  html2canvas(document.getElementById("results")).then(function (canvas) {
    // Convert the canvas to a data URL
    var imageData = canvas.toDataURL("image/png");

    // Create a temporary link element
    var link = document.createElement("a");
    link.href = imageData;
    link.download = "result_screenshot.png";

    // Trigger a click event on the link to download the screenshot
    link.click();
  });
  const result = calculateResult();
  const currentUrl = window.location.href;
  navigator
    .share({
      title: "Share Result",
      text: `I am ${result.percentage}% from ${result.regionLabel} region in Gujarat! Check it out: ${currentUrl}`,
    })
    .then(() => console.log(""))
    .catch((error) => console.log());
}

function shareWhatsApp() {
  const result = calculateResult();
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = `I am ${result.percentage}% from ${result.regionLabel} region in Gujarat! Check it out: ${currentUrl}`;
  // console.log(shareText);
  // Open WhatsApp link in a new tab
  window.open(`https://wa.me/?text=${shareText}`, "_blank");
}

function shareTwitter() {
  const result = calculateResult();
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = `I am ${result.percentage}% from ${result.regionLabel} region in Gujarat! Check it out: ${currentUrl}`;
  // console.log(shareText);
  // Open Twitter link in a new tab
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
    "_blank"
  );
}
function shareLinkedIn() {
  const result = calculateResult();
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = `I am ${result.percentage}% from ${result.regionLabel} region in Gujarat! Check it out: ${currentUrl}`;
  // console.log(shareText);

  // Open LinkedIn share link in a new tab
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}&summary=${encodeURIComponent(
      shareText
    )}`,
    "_blank"
  );
}

function shareSkype() {
  const result = calculateResult();
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = `I am ${result.percentage}% from ${result.regionLabel} region in Gujarat! Check it out: ${currentUrl}`;
  // console.log(shareText);
  // Open Skype share link in a new tab
  window.open(
    `https://web.skype.com/share?url=${currentUrl}&text=${encodeURIComponent(
      shareText
    )}`,
    "_blank"
  );
}

function shareFacebook() {
  const result = calculateResult();
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = `I am ${result.percentage}% from ${result.regionLabel} region in Gujarat! Check it out: ${currentUrl}`;
  // console.log(shareText);
  // Open Facebook link in a new tab
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&quote=${encodeURIComponent(
      shareText
    )}`,
    "_blank"
  );
}

function calculateResult() {
  // Access the already calculated values directly
  const percentage = Math.round(height); // Replace with your actual calculation
  const regionLabel = document.getElementById("cardinal").textContent; // Replace with your actual element or logic
  return { percentage, regionLabel };
}
