const questions = [
  {
    q: "What is the capital of India?",
    answers: ["Delhi", "Mumbai", "Kolkata"],
    correct: 0
  },
  {
    q: "What does CSS stand for?",
    answers: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Syntax"],
    correct: 1
  },
  {
    q: "Which is not a JavaScript data type?",
    answers: ["Boolean", "String", "Fraction"],
    correct: 2
  },
  {
    q: "Which HTML element is used for the largest heading?",
    answers: ["&lt;h6&gt;", "&lt;heading&gt;", "&lt;h1&gt;"],
    correct: 2
  },
  {
    q: "Which symbol is used for comments in JavaScript?",
    answers: ["//", "/* */", "#"],
    correct: 0
  },
  {
    q: "What will 3 + '3' output in JavaScript?",
    answers: ["6", "'33'", "Error"],
    correct: 1
  },
  {
    q: "Which property is used to change text color in CSS?",
    answers: ["text-color", "font-color", "color"],
    correct: 2
  },
  {
    q: "What does API stand for?",
    answers: ["Application Programming Interface", "Advanced Programming Integration", "Applied Program Internet"],
    correct: 0
  },
  {
    q: "Which HTML tag is used to insert an image?",
    answers: ["&lt;img&gt;", "&lt;image&gt;", "&lt;pic&gt;"],
    correct: 0
  },
  {
    q: "Which function is used to select an element by its ID in JavaScript?",
    answers: ["getElementByClass", "querySelectorAll", "getElementById"],
    correct: 2
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  if (current >= questions.length) {
    document.getElementById("quiz").innerHTML =
      `<div class="score">Quiz Finished!<br>Score: ${score} / ${questions.length}</div>`;
    return;
  }
  const q = questions[current];
  let html = `<h2>${q.q}</h2>`;
  q.answers.forEach((answer, i) => {
    html += `<button class="option" onclick="answer(this, ${i})">${answer}</button>`;
  });
  document.getElementById("quiz").innerHTML = html;
}

function answer(btn, i) {

  const buttons = document.querySelectorAll('.option');
  buttons.forEach(b => b.disabled = true);

  if (i === questions[current].correct) {
    btn.style.background = "#73fa94"; 
    score++;
  } else {
    btn.style.background = "#f95353"; 
 
    buttons[questions[current].correct].style.background = "#73fa94";
  }

  setTimeout(() => {
    current++;
    loadQuestion();
  }, 1000);
}

window.onload = loadQuestion;
