// ------- birthday cake (index.html) -------
window.addEventListener("DOMContentLoaded", () => {
  const cakeOverlay = document.getElementById("cakeOverlay");
  const candles = document.getElementById("candles");

  if (cakeOverlay && candles) {        // run only on index.html
    window.showCake = function () {
      cakeOverlay.classList.add("active");
      candles.classList.remove("off");
    };

    candles.addEventListener("click", () => {
      candles.classList.add("off");
    });

    cakeOverlay.addEventListener("click", (e) => {
      if (e.target === cakeOverlay) {
        cakeOverlay.classList.remove("active");
      }
    });
  }
});

// go to surprise page (from index.html button)
function goToSurprise() {
  window.location.href = "surprise.html";
}

// ------- typing effect (surprise.html) -------
const lines = [
  "Surprise! 🎉",
  "Aaaa! i gotacha...umm wait im thinking wht surprise should i give u....ummmmm",
  "my brains a little bit dumb but....lemme see wht i can give u...",
  "haa let me flirt u😏 with some cheesy lines",
  "WANNA PLAY!!"
];

const ids = ["line1", "line2", "line3", "line4", "line5"];

let lineIndex = 0;
let charIndex = 0;
const typingSpeed = 40;
const linePause = 600;

function typeLine() {
  if (lineIndex >= lines.length) {
    const btn = document.getElementById("playBtn");
    if (btn) btn.classList.remove("hidden");
    return;
  }

  const element = document.getElementById(ids[lineIndex]);
  if (!element) return;

  const fullText = lines[lineIndex];

  element.textContent = fullText.slice(0, charIndex + 1);
  charIndex++;

  if (charIndex < fullText.length) {
    setTimeout(typeLine, typingSpeed);
  } else {
    lineIndex++;
    charIndex = 0;
    setTimeout(typeLine, linePause);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // only run typing on surprise.html (line1 exists there)
  if (document.getElementById("line1")) {
    typeLine();
  }
});

// ---------- GAME LOGIC (game.html) ----------

const questions = [
  {
    text: "Pick a vibe for our first chat 💬",
    options: [
      { text: "Soft and sweet🧸", score: 1 },
      { text: "Cute but a little wild 😈", score: 2 },
      { text: "Wild 🔥", score: 3 }
    ]
  },
  {
    text: "Choose a cheesy line you’d drop on me 😉",
    options: [
      { text: "“Are you Wi‑Fi? Because I’m feeling a strong connection.” 📶", score: 1 },
      { text: "“Careful, I’m a little toxic but extremely pretty.” 😇😈", score: 3 },
      { text: "“I wasn’t blushing, it’s just my heart logging in to see you.” 💓", score: 2 }
    ]
  },
  {
    text: "We’re texting… what are you sending?",
    options: [
      { text: "A wholesome ‘did you eat?’ with 3 cute emojis 🥹✨", score: 1 },
      { text: "A selfie with “miss me yet?” and you KNOW I do 😏", score: 3 },
      { text: "A random meme + “this is so us” 🐸", score: 2 }
    ]
  }
];

let currentQuestion = 0;
let totalScore = 0;

const questionText = document.getElementById("question-text");
const optionsBox = document.getElementById("options");
const questionBox = document.getElementById("question-box");
const resultBox = document.getElementById("result-box");
const resultTitle = document.getElementById("result-title");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");

function showQuestion() {
  // if questionText doesn't exist, we're not on game.html
  if (!questionText) return;

  const q = questions[currentQuestion];
  questionText.textContent = q.text;
  optionsBox.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => handleAnswer(opt.score));
    optionsBox.appendChild(btn);
  });
}

function handleAnswer(score) {
  totalScore += score;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  let title, text;

  if (totalScore <= 3) {
    title = "Soft Rizz 🧁";
    text =
      "You’re cute, gentle, and give ‘are you home safe?’ energy. Perfect for slow late‑night calls and forehead-kiss vibes.";
  } else if (totalScore <= 6) {
    title = "Cute & Chaos 💫";
    text =
      "You switch from “drink water” to “so when are we eloping?” in 0.3 seconds. Ideal danger level. 12/10 would flirt again.";
  } else {
    title = "Wild Rizz 🔥";
    text =
      "You’re a menace in the best way. Chaos, emojis, and zero chill. Flirting with you is like playing a game on hard mode—and loving it.";
  }

  resultTitle.textContent = title;
  resultText.textContent = text;
}

if (restartBtn && questionText) {
  restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    totalScore = 0;
    resultBox.classList.add("hidden");
    questionBox.classList.remove("hidden");
    showQuestion();
  });
}

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    window.location.href = "index.html"; // your main birthday page
  });
}

// initial load only on game.html
if (questionText) {
  showQuestion();
}
//--------------------
function storyOfus() {
  // if your page is storyofus.html in same folder
  window.location.href = "storyofus.html";
}

