const questions = [
    {
        question: "By the time the police arrived, the thief ______.",
        answers: [
            { text: "escapes", correct: false },
            { text: "had escaped", correct: true },
            { text: "has escaped", correct: false },
            { text: "was escaping", correct: false }
        ]
    },
    {
        question: "If she ______ harder, she would have passed the exam.",
        answers: [
            { text: "studies", correct: false },
            { text: "studied", correct: false },
            { text: "had studied", correct: true },
            { text: "has studied", correct: false }
        ]
    },
    {
        question: "This house ______ by my grandfather in 1950.",
        answers: [
            { text: "built", correct: false },
            { text: "was built", correct: true },
            { text: "is built", correct: false },
            { text: "was building", correct: false }
        ]
    },
    {
        question: "I am not used to ______ so early in the morning.",
        answers: [
            { text: "get up", correct: false },
            { text: "got up", correct: false },
            { text: "getting up", correct: true },
            { text: "gets up", correct: false }
        ]
    },
    {
        question: "The man ______ son won the prize is my neighbor.",
        answers: [
            { text: "who", correct: false },
            { text: "whom", correct: false },
            { text: "whose", correct: true },
            { text: "which", correct: false }
        ]
    },
    {
        question: "Neither Ahmed nor his friends ______ going to the stadium.",
        answers: [
            { text: "is", correct: false },
            { text: "are", correct: true },
            { text: "am", correct: false },
            { text: "be", correct: false }
        ]
    },
    {
        question: "She suggested ______ to the park instead of the mall.",
        answers: [
            { text: "go", correct: false },
            { text: "to go", correct: false },
            { text: "going", correct: true },
            { text: "goes", correct: false }
        ]
    },
    {
        question: "How ______ information did you find about the project?",
        answers: [
            { text: "many", correct: false },
            { text: "much", correct: true },
            { text: "few", correct: false },
            { text: "a lot", correct: false }
        ]
    },
    {
        question: "I wish I ______ more time to finish the test yesterday.",
        answers: [
            { text: "have", correct: false },
            { text: "had", correct: false },
            { text: "had had", correct: true },
            { text: "was having", correct: false }
        ]
    },
    {
        question: "They have been living in Riyadh ______ ten years.",
        answers: [
            { text: "since", correct: false },
            { text: "for", correct: true },
            { text: "from", correct: false },
            { text: "ago", correct: false }
        ]
    },
    {
        question: "The teacher made the students ______ the exercise again.",
        answers: [
            { text: "to do", correct: false },
            { text: "do", correct: true },
            { text: "doing", correct: false },
            { text: "did", correct: false }
        ]
    },
    {
        question: "Scarcely ______ the room when the phone rang.",
        answers: [
            { text: "he entered", correct: false },
            { text: "did he enter", correct: false },
            { text: "had he entered", correct: true },
            { text: "he has entered", correct: false }
        ]
    },
    {
        question: "You ______ better see a doctor about that cough.",
        answers: [
            { text: "should", correct: false },
            { text: "would", correct: false },
            { text: "had", correct: true },
            { text: "ought", correct: false }
        ]
    },
    {
        question: "That is the hospital ______ my brother works.",
        answers: [
            { text: "which", correct: false },
            { text: "where", correct: true },
            { text: "that", correct: false },
            { text: "when", correct: false }
        ]
    },
    {
        question: "I would have lent you money if you ______ me.",
        answers: [
            { text: "ask", correct: false },
            { text: "asked", correct: false },
            { text: "had asked", correct: true },
            { text: "have asked", correct: false }
        ]
    },
    {
        question: "She works ______ than anyone else in the office.",
        answers: [
            { text: "harder", correct: true },
            { text: "hardest", correct: false },
            { text: "more hard", correct: false },
            { text: "as hard", correct: false }
        ]
    },
    {
        question: "The news ______ not as bad as we expected.",
        answers: [
            { text: "are", correct: false },
            { text: "is", correct: true },
            { text: "were", correct: false },
            { text: "be", correct: false }
        ]
    },
    {
        question: "By next month, I ______ from the university.",
        answers: [
            { text: "graduate", correct: false },
            { text: "will graduate", correct: false },
            { text: "will have graduated", correct: true },
            { text: "am graduating", correct: false }
        ]
    },
    {
        question: "I ______ my keys; I can't find them anywhere.",
        answers: [
            { text: "lost", correct: false },
            { text: "have lost", correct: true },
            { text: "had lost", correct: false },
            { text: "was losing", correct: false }
        ]
    },
    {
        question: "There are ______ people in the room than there were earlier.",
        answers: [
            { text: "less", correct: false },
            { text: "fewer", correct: true },
            { text: "fewest", correct: false },
            { text: "least", correct: false }
        ]
    },
    {
        question: "He asked me where ______ my vacation.",
        answers: [
            { text: "did I spend", correct: false },
            { text: "I spent", correct: true },
            { text: "spent I", correct: false },
            { text: "do I spend", correct: false }
        ]
    },
    {
        question: "The children were ______ to go to the zoo.",
        answers: [
            { text: "excite", correct: false },
            { text: "exciting", correct: false },
            { text: "excited", correct: true },
            { text: "excitement", correct: false }
        ]
    },
    {
        question: "You ______ wash the car; I've already done it.",
        answers: [
            { text: "mustn't", correct: false },
            { text: "don't have to", correct: true },
            { text: "shouldn't", correct: false },
            { text: "can't", correct: false }
        ]
    },
    {
        question: "We look forward ______ the new museum next week.",
        answers: [
            { text: "to visit", correct: false },
            { text: "to visiting", correct: true },
            { text: "visit", correct: false },
            { text: "visiting", correct: false }
        ]
    },
    {
        question: "Although it was raining, ______ they went for a walk.",
        answers: [
            { text: "but", correct: false },
            { text: "yet", correct: false },
            { text: "still", correct: false },
            { text: "none of these", correct: true }
        ]
    },
    {
        question: "Please ______ the door behind you.",
        answers: [
            { text: "to lock", correct: false },
            { text: "locking", correct: false },
            { text: "lock", correct: true },
            { text: "locked", correct: false }
        ]
    },
    {
        question: "He is the smartest student ______ the class.",
        answers: [
            { text: "than", correct: false },
            { text: "of", correct: false },
            { text: "in", correct: true },
            { text: "at", correct: false }
        ]
    },
    {
        question: "I ______ to the gym every day when I was younger.",
        answers: [
            { text: "use to go", correct: false },
            { text: "used to go", correct: true },
            { text: "am used to go", correct: false },
            { text: "was used to go", correct: false }
        ]
    },
    {
        question: "The water ______ at 100 degrees Celsius.",
        answers: [
            { text: "boil", correct: false },
            { text: "boils", correct: true },
            { text: "is boiling", correct: false },
            { text: "was boiling", correct: false }
        ]
    },
    {
        question: "She had ______ money that she couldn't buy the book.",
        answers: [
            { text: "so little", correct: true },
            { text: "so few", correct: false },
            { text: "such little", correct: false },
            { text: "too many", correct: false }
        ]
    },
    {
        question: "They ______ for three hours before they found the road.",
        answers: [
            { text: "were driving", correct: false },
            { text: "had been driving", correct: true },
            { text: "have been driving", correct: false },
            { text: "are driving", correct: false }
        ]
    },
    {
        question: "If I ______ you, I would take that job offer.",
        answers: [
            { text: "am", correct: false },
            { text: "was", correct: false },
            { text: "were", correct: true },
            { text: "be", correct: false }
        ]
    },
    {
        question: "This is the car ______ I bought from Ali.",
        answers: [
            { text: "who", correct: false },
            { text: "whom", correct: false },
            { text: "which", correct: true },
            { text: "whose", correct: false }
        ]
    },
    {
        question: "He is very tired because he ______ all day.",
        answers: [
            { text: "is working", correct: false },
            { text: "has been working", correct: true },
            { text: "works", correct: false },
            { text: "work", correct: false }
        ]
    },
    {
        question: "I don't have ______ salt for the soup.",
        answers: [
            { text: "many", correct: false },
            { text: "enough", correct: true },
            { text: "few", correct: false },
            { text: "several", correct: false }
        ]
    },
    {
        question: "We ______ to the zoo last Friday.",
        answers: [
            { text: "go", correct: false },
            { text: "went", correct: true },
            { text: "gone", correct: false },
            { text: "was going", correct: false }
        ]
    },
    {
        question: "______ you ever been to Dubai?",
        answers: [
            { text: "Do", correct: false },
            { text: "Did", correct: false },
            { text: "Have", correct: true },
            { text: "Are", correct: false }
        ]
    },
    {
        question: "The food smells ______, let's eat!",
        answers: [
            { text: "good", correct: true },
            { text: "well", correct: false },
            { text: "better", correct: false },
            { text: "best", correct: false }
        ]
    },
    {
        question: "He went to the shop ______ buy some milk.",
        answers: [
            { text: "for", correct: false },
            { text: "to", correct: true },
            { text: "so", correct: false },
            { text: "because", correct: false }
        ]
    },
    {
        question: "I can't find my phone; someone ______ it.",
        answers: [
            { text: "must take", correct: false },
            { text: "must have taken", correct: true },
            { text: "should take", correct: false },
            { text: "can take", correct: false }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

let timerInterval;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft;
let quizQuestions = [];
let userAnswers = []; 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    quizQuestions = [...questions];
    shuffleArray(quizQuestions); 

    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 35 * 60; 
    
    nextButton.innerHTML = "Next"; 
    nextButton.classList.remove("restart-btn");
    
    nextButton.style.display = "none"; 
    clearInterval(timerInterval); 
    startTimer();
    showQuestions();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        if (timerElement) {
            timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds} ⏱️`;
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showScore(); 
        }
    }, 1000);
}

function showQuestions() {
    resetState();
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    shuffleArray(currentQuestion.answers); 

    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    if (progressBar) {
        const progressPercent = (questionNo / quizQuestions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    Array.from(answerButtons.children).forEach(button => {
        button.classList.remove("selected");
    });
    selectedBtn.classList.add("selected");
    nextButton.style.display = "block";
}

function handleNextButton() {
    const selectedButton = document.querySelector(".selected");
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    if (selectedButton) {
        const isCorrect = selectedButton.dataset.correct === "true";
        if (isCorrect) score++;

        userAnswers.push({
            question: currentQuestion.question,
            selected: selectedButton.innerHTML,
            correct: currentQuestion.answers.find(a => a.correct).text,
            isCorrect: isCorrect
        });
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestions();
        nextButton.style.display = "none";
    } else {
        showScore();
    }
}

function showScore() {
    clearInterval(timerInterval); 
    resetState();
    
    let scoreHTML = `<h2>النتيجة: ${score} / ${quizQuestions.length}</h2>`;
    const mistakes = userAnswers.filter(answer => !answer.isCorrect);

    if (score === quizQuestions.length) {
        scoreHTML += `<p>ماشاءالله! درجة كاملة، لا توجد أخطاء لمراجعتها. 🌟</p>`;
    } 
    else if (mistakes.length > 0) {
        scoreHTML += `<div class="mistakes-container" dir="rtl"><h3>مراجعة الأخطاء:</h3>`;
        mistakes.forEach((m) => {
            scoreHTML += `
                <div class="mistake-item">
                    <p><strong>السؤال: ${m.question}</strong></p>
                    <p style="color: #a82323;">إجابتك: ${m.selected}</p>
                    <p style="color: #2e7d32;">الإجابة الصحيحة: ${m.correct}</p>
                    <hr>
                </div>`;
        });
        scoreHTML += `</div>`;
    } 
    else {
        scoreHTML += `<p>يبدو أنك لم تقم بالإجابة على الأسئلة. حاول مجدداً لاختبار معلوماتك!</p>`;
    }

    questionElement.innerHTML = scoreHTML;
    
    nextButton.innerHTML = 'إعادة المحاولة';
    nextButton.classList.add("restart-btn"); 
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (nextButton.classList.contains("restart-btn")) {
        nextButton.classList.remove("restart-btn"); 
        userAnswers = []; 
        startQuiz();
    } else {
        handleNextButton();
    }
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader-screen");
    setTimeout(() => {
        if (loader) loader.classList.add("loader-hidden");
        startQuiz(); 
    }, 1500); 
});
