let main = document.querySelector(".main");

const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: {
      Shark: false,
      "Blue whale": true,
      Elephant: false,
      Giraffe: false,
    },
  },
  {
    question: "Which is the smallest country in the world?",
    answers: {
      "Vatican City": true,
      "Shri Lanka": false,
      Nepal: false,
      Bhutan: false,
    },
  },
  {
    question: "Which is the largest desert in the world?",
    answers: {
      "Sahara Desert": true,
      "Gobi Desert": false,
      "Kalahari Desert": false,
      "Arabian Desert": false,
    },
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: {
      Africa: false,
      Australia: true,
      America: false,
      Europe: false,
    },
  },
];
let arr = [0, 1, 2, 3];
let currentIndex = 0;
let index;
let score = 0;

function init() {
  button.addEventListener("click", handleButtonClick);
  startQuiz();
}

function handleButtonClick() {
  if (button.innerHTML === "Play Again") {
    startQuiz();
  } else {
    currentIndex++;
    if (currentIndex <= 3) {
      showQuestion();
    } else {
      main.innerHTML = `You scored ${score} out of 4!`;
      button.innerHTML = "Play Again";
    }
  }
}

function startQuiz() {
  arr = [0, 1, 2, 3];
  arr.sort(() => Math.random() - 0.5);
  currentIndex = 0;
  index = currentIndex + 1;
  score = 0;
  button.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentIndex];
  index = currentIndex + 1;

  main.innerHTML = `<div class="question">${index}. ${
    currentQuestion.question
  }</div>
      <div class="options">
         <div class="ans">${Object.keys(currentQuestion.answers)[arr[0]]}</div>
        <div class="ans">${Object.keys(currentQuestion.answers)[arr[1]]}</div>
        <div class="ans">${Object.keys(currentQuestion.answers)[arr[2]]}</div>
        <div class="ans">${Object.keys(currentQuestion.answers)[arr[3]]}</div>
      </div>`;

  setupAnswerListeners();
}

function setupAnswerListeners() {
  let opt = document.querySelectorAll(".ans");
  opt.forEach((e) => {
    e.addEventListener("click", function () {
      if (questions[currentIndex].answers[e.innerHTML]) {
        e.style.backgroundColor = "lightgreen";
        score++;
        opt.forEach((option) => {
          option.style.pointerEvents = "none";
        });
      } else {
        e.style.backgroundColor = "#f08080";
        opt.forEach((option) => {
          if (questions[currentIndex].answers[option.innerHTML]) {
            option.style.backgroundColor = "lightgreen";
          }
          option.style.pointerEvents = "none";
        });
      }
    });
  });
}

init();
