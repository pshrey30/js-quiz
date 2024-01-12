const data = [
    {
      id: 1,
      question: "Which team won the world cup 2023?",
      answers: [
        { answer: "Australia", isCorrect: true },
        { answer: "India", isCorrect: false },
        { answer: "England", isCorrect: false },
        { answer: "South Africa", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "How scored more runs in world cup 2023?",
      answers: [
        { answer: "Rachin Ravindra", isCorrect: false },
        { answer: "Rohit Sharma", isCorrect: false },
        { answer: "Virat Kohli", isCorrect: true },
        { answer: "Quinton De Kock", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "How took most wickets in world cup 2023?",
      answers: [
        { answer: "Bumrah", isCorrect: false },
        { answer: "Shami", isCorrect: true },
        { answer: "Zampa", isCorrect: false },
        { answer: "Afridi", isCorrect: false },
      ],
    },
];


const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click",()=>{
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain()
})

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
      <label for="1">${item.answer}</label>
  </div>
  `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();