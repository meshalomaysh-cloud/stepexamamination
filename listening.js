const quizData = [
    {
    audio: "first.mp3",
    questions: [
        {
            question: "What percentage of marine species depend on coral reefs for their home?",
            answers: [
                { text: "Less than one percent", correct: false },
                { text: "Ten percent", correct: false },
                { text: "Twenty-five percent", correct: true },
                { text: "Fifty percent", correct: false }
            ]
        },
        {
            question: "How do coral reefs help coastal communities during storms?",
            answers: [
                { text: "By warming the ocean water", correct: false },
                { text: "By acting as natural barriers against erosion", correct: true },
                { text: "By producing heat-resistant salt", correct: false },
                { text: "By absorbing tropical rainfall", correct: false }
            ]
        },
        {
            question: "What is the main goal of current scientific restoration projects?",
            answers: [
                { text: "To move all fish to deep water labs", correct: false },
                { text: "To stop pollution in the rainforests", correct: false },
                { text: "To grow heat-resistant coral in laboratories", correct: true },
                { text: "To decrease the ocean floor depth", correct: false }
            ]
        }
    ]
    },
    {
    audio: "daily_life_audio.mp3",
    questions: [
        {
            question: "When will the library renovation project officially begin?",
            answers: [
                { text: "This Friday", correct: false },
                { text: "Next Monday", correct: true },
                { text: "In three months", correct: false },
                { text: "After final exams", correct: false }
            ]
        },
        {
            question: "Which new features will be added to the library floors?",
            answers: [
                { text: "A coffee shop and a bookstore", correct: false },
                { text: "Physical book archives and a gym", correct: false },
                { text: "High-speed workstations and study lounges", correct: true },
                { text: "A new printing center on the first floor", correct: false }
            ]
        },
        {
            question: "How can students access physical books that are unavailable during construction?",
            answers: [
                { text: "By entering the second floor quietly", correct: false },
                { text: "Through the inter-library loan system", correct: true },
                { text: "By waiting until the renovation is over", correct: false },
                { text: "By searching the digital archive only", correct: false }
            ]
        }
    ]
    },
    {
    audio: "smart_city_audio.mp3",
    questions: [
        {
            question: "What is the primary purpose of 'smart streetlights' mentioned in the text?",
            answers: [
                { text: "To monitor traffic violations", correct: false },
                { text: "To dim automatically and save energy", correct: true },
                { text: "To provide free internet to citizens", correct: false },
                { text: "To detect waste collection levels", correct: false }
            ]
        },
        {
            question: "How do intelligent traffic signals help urban areas?",
            answers: [
                { text: "By increasing the carbon footprint", correct: false },
                { text: "By collecting data for science fiction", correct: false },
                { text: "By reducing congestion during rush hour", correct: true },
                { text: "By dimming the city lights", correct: false }
            ]
        },
        {
            question: "What is the main concern regarding the rise of smart cities?",
            answers: [
                { text: "The lack of high-tech lifestyle benefits", correct: false },
                { text: "The speed of waste collection", correct: false },
                { text: "Data privacy and security issues", correct: true },
                { text: "The cost of installing traffic sensors", correct: false }
            ]
        }
    ]
    },
    {
    audio: "business_audio.mp3",
    questions: [
        {
            question: "What is one major environmental benefit of the remote work trend?",
            answers: [
                { text: "More office space for plants", correct: false },
                { text: "Reduced impact from transportation", correct: true },
                { text: "Increased electricity use at home", correct: false },
                { text: "Higher productivity in families", correct: false }
            ]
        },
        {
            question: "According to the text, what is a challenge managers face with remote teams?",
            answers: [
                { text: "Lower employee productivity", correct: false },
                { text: "Maintaining a strong company culture", correct: true },
                { text: "High costs of monthly meetups", correct: false },
                { text: "Longer daily commutes for workers", correct: false }
            ]
        },
        {
            question: "How are some organizations keeping colleagues connected?",
            answers: [
                { text: "By eliminating home working models", correct: false },
                { text: "By banning family time during work", correct: false },
                { text: "Through virtual team-building and monthly meetups", correct: true },
                { text: "By investing in new office furniture", correct: false }
            ]
        }
    ]
    },
    {
    audio: "history_audio.mp3",
    questions: [
        {
            question: "Why were books rare before the fifteenth century?",
            answers: [
                { text: "Because people did not like reading", correct: false },
                { text: "Because they had to be copied by hand", correct: true },
                { text: "Because paper was not yet invented", correct: false },
                { text: "Because scientists were not educated", correct: false }
            ]
        },
        {
            question: "In what year did Johannes Gutenberg invent the movable-type press?",
            answers: [
                { text: "1440", correct: true },
                { text: "1500", correct: false },
                { text: "1700", correct: false },
                { text: "1840", correct: false }
            ]
        },
        {
            question: "What major era did the printing press help bring to an end?",
            answers: [
                { text: "The Global Era", correct: false },
                { text: "The Scientific Revolution", correct: false },
                { text: "The Middle Ages", correct: true },
                { text: "The Era of Education", correct: false }
            ]
        }
    ]
    },
    {
    audio: "health_audio.mp3",
    questions: [
        {
            question: "What does the brain do during deep sleep according to the text?",
            answers: [
                { text: "It shuts down completely", correct: false },
                { text: "It clears out toxic waste products", correct: true },
                { text: "It increases the risk of heart disease", correct: false },
                { text: "It stays in a passive state of rest", correct: false }
            ]
        },
        {
            question: "How many hours of sleep do experts recommend for the average adult?",
            answers: [
                { text: "Five to six hours", correct: false },
                { text: "Seven to nine hours", correct: true },
                { text: "At least ten hours", correct: false },
                { text: "Exactly eight hours", correct: false }
            ]
        },
        {
            question: "What is a suggested way to improve mental clarity before bed?",
            answers: [
                { text: "Avoiding electronic screens", correct: true },
                { text: "Checking daily focus tasks", correct: false },
                { text: "Exercising the immune system", correct: false },
                { text: "Consuming toxic waste products", correct: false }
            ]
        }
    ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const audioPlayer = document.getElementById("quiz-audio");

let topicIndex = 0;
let subQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let audioPlayCount = 0;

function startQuiz() {
    audioPlayCount=0;
    topicIndex = 0;
    subQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    audioPlayer.disabled = false;
    audioPlayer.style.opacity = "1";
    audioPlayer.style.pointerEvents = "auto";
    
    audioPlayer.load(); 

    nextButton.innerHTML = "Next";
    nextButton.classList.remove("restart-btn");
    
    showQuestions();
}

function showQuestions() {
    resetState();
    const currentTopic = quizData[topicIndex];
    const currentQuestion = currentTopic.questions[subQuestionIndex];

    if (subQuestionIndex === 0) {
        audioPlayCount = 0; 
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        audioPlayer.src = currentTopic.audio;
        
        audioPlayer.disabled = false;
        audioPlayer.style.opacity = "1";
        audioPlayer.style.pointerEvents = "auto";
        audioPlayer.controls = true;

        audioPlayer.load();

        audioPlayer.oncanplaythrough = () => {
            console.log("Audio ready: " + currentTopic.audio);
        };

        audioPlayer.onended = function() {
            audioPlayCount++; 
            
            if (audioPlayCount >= 2) {
                audioPlayer.disabled = true;
                audioPlayer.style.opacity = "0.5";
                audioPlayer.style.pointerEvents = "none";
                console.log("Audio locked: Maximum plays reached.");
            } else {
                console.log("Plays remaining: " + (2 - audioPlayCount));
            }
        };
    }

    const totalQuestions = quizData.length * 3;
    const currentOverallNum = (topicIndex * 3) + (subQuestionIndex + 1);
    questionElement.innerHTML = `${currentOverallNum}. ${currentQuestion.question}`;

    if (progressBar) {
        const progressPercent = (currentOverallNum / totalQuestions) * 100;
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
    const currentTopic = quizData[topicIndex];
    const currentQuestion = currentTopic.questions[subQuestionIndex];
    
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

    subQuestionIndex++;
    
    if (subQuestionIndex >= currentTopic.questions.length) {
        subQuestionIndex = 0;
        topicIndex++;
    }

    if (topicIndex < quizData.length) {
        showQuestions();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    audioPlayer.pause();
    
    const totalQuestions = quizData.length * 3;
    let scoreHTML = `<h2 dir="rtl">النتيجة: ${score} / ${totalQuestions}</h2>`;
    const mistakes = userAnswers.filter(answer => !answer.isCorrect);

    if (score === totalQuestions) {
        scoreHTML += `<p dir="rtl">أحسنت! درجة كاملة. 💯</p>`;
    } else {
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

    questionElement.innerHTML = scoreHTML;
    nextButton.innerHTML = 'إعادة المحاولة';
    nextButton.classList.add("restart-btn"); 
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (nextButton.classList.contains("restart-btn")) {
        startQuiz();
    } else {
        handleNextButton();
    }
});

function initExam() {
    questionElement.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px; text-align: center; ">
            <button id="start-exam-btn" class="btn" style="width: fit-content; padding: 15px 30px; font-size:30px;">إضغط هنا لبدء الإختبار</button>
        </div>`;
    document.getElementById("start-exam-btn").addEventListener("click", startQuiz);
}

window.addEventListener("load", initExam);