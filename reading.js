const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const readingTextElement = document.getElementById("reading-text");

const quizData = [
    {
        paragraph: "In recent years, many urban planners have focused on the development of 'Green Cities' to combat rising global temperatures. These cities are designed with a high density of parks, vertical gardens, and tree-lined streets. Instead of relying on private vehicles, citizens are encouraged to use extensive bicycle lanes or walk to their destinations, which significantly reduces carbon emissions. The air quality in these areas is noticeably superior because there is far less industrial and traffic pollution. Furthermore, modern buildings in Green Cities are equipped with advanced solar panels to generate sustainable electricity, ensuring that the urban environment remains protected for future generations.",
        questions: [
            {
                question: "What is the primary reason for the superior air quality in Green Cities?",
                answers: [
                    { text: "The use of vertical gardens", correct: false },
                    { text: "Reduced industrial and traffic pollution", correct: true },
                    { text: "The high density of solar panels", correct: false },
                    { text: "The rising global temperatures", correct: false }
                ]
            },
            {
                question: "How do urban planners encourage citizens to avoid driving cars?",
                answers: [
                    { text: "By building more highways", correct: false },
                    { text: "By providing extensive bicycle lanes", correct: true },
                    { text: "By moving people to the countryside", correct: false },
                    { text: "By banning all forms of transport", correct: false }
                ]
            },
            {
                question: "What technology is integrated into buildings to ensure sustainability?",
                answers: [
                    { text: "High-speed elevators", correct: false },
                    { text: "Advanced solar panels", correct: true },
                    { text: "Industrial air filters", correct: false },
                    { text: "Carbon emission sensors", correct: false }
                ]
            }
        ]
    },
    {
        paragraph: "Ibn Battuta is widely regarded as one of the most prolific travelers in human history. Born in Tangier, Morocco, in the 14th century, he initially set out on a pilgrimage but ended up spending nearly thirty years exploring the known world. His journey covered approximately 75,000 miles, taking him through North Africa, the Middle East, Central Asia, and Southeast Asia. Upon his return, he dictated a detailed account of his experiences, known as the 'Rihla.' Today, historians and students alike study his narratives to gain invaluable insights into the medieval world, the spread of various cultures, and the complex trade routes of the past.",
        questions: [
            {
                question: "What was the original reason Ibn Battuta began his journey?",
                answers: [
                    { text: "To write a famous book", correct: false },
                    { text: "To go on a pilgrimage", correct: true },
                    { text: "To explore trade routes", correct: false },
                    { text: "To find a new home in Asia", correct: false }
                ]
            },
            {
                question: "Approximately how far did Ibn Battuta travel during his thirty years away?",
                answers: [
                    { text: "14,000 miles", correct: false },
                    { text: "75,000 miles", correct: true },
                    { text: "30,000 miles", correct: false },
                    { text: "100,000 miles", correct: false }
                ]
            },
            {
                question: "Why is his book 'Rihla' still considered important today?",
                answers: [
                    { text: "It teaches people how to travel safely", correct: false },
                    { text: "It provides historical insights into medieval cultures", correct: true },
                    { text: "It is the only book ever written about Morocco", correct: false },
                    { text: "It contains maps of the entire modern world", correct: false }
                ]
            }
        ]
    },
    {
        paragraph: "Camels are exceptionally adapted to the harsh environments of the world's most arid deserts. Often referred to as the 'ships of the desert,' these animals possess unique physiological traits that allow them to survive for long periods without access to fresh water. Contrary to popular belief, their humps do not store water; instead, they store deposits of fatty tissue that provide metabolic energy when food is scarce. Additionally, camels have three sets of eyelids and two rows of long eyelashes to shield their eyes from swirling sand during desert storms. Their wide, padded feet also prevent them from sinking into the soft dunes, making them the perfect transport for desert travel.",
        questions: [
            {
                question: "What is the true purpose of a camel's hump?",
                answers: [
                    { text: "To store gallons of drinking water", correct: false },
                    { text: "To store fatty tissue for energy", correct: true },
                    { text: "To help them carry heavy loads", correct: false },
                    { text: "To regulate their body temperature", correct: false }
                ]
            },
            {
                question: "How do camels protect their eyes during sandstorms?",
                answers: [
                    { text: "By hiding their heads in the sand", correct: false },
                    { text: "By using multiple sets of eyelids and long lashes", correct: true },
                    { text: "By closing their eyes for several days", correct: false },
                    { text: "By moving only during the night", correct: false }
                ]
            },
            {
                question: "Why are camels well-suited for walking on sand dunes?",
                answers: [
                    { text: "They have very long legs", correct: false },
                    { text: "They have wide, padded feet", correct: true },
                    { text: "They can run faster than horses", correct: false },
                    { text: "They do not need to look at the ground", correct: false }
                ]
            }
        ]
    },
    {
        paragraph: "Nutritional experts often argue that preparing meals at home is significantly more beneficial than consuming processed fast food. When cooking in your own kitchen, you have complete control over the quality of the ingredients, allowing you to prioritize fresh vegetables and healthier cooking oils. Beyond the health benefits, home cooking is a much more economical choice than dining at expensive restaurants or ordering takeout. With the rise of the digital age, many people now find it easier to learn diverse culinary techniques through video tutorials on the internet. Ultimately, a diet consisting of home-cooked, nutrient-dense meals provides the sustained energy necessary for academic success and physical well-being.",
        questions: [
            {
                question: "What advantage does home cooking offer regarding ingredients?",
                answers: [
                    { text: "It makes ingredients taste like fast food", correct: false },
                    { text: "It gives you total control over their quality", correct: true },
                    { text: "It is the only way to find fresh vegetables", correct: false },
                    { text: "It requires ingredients that are very expensive", correct: false }
                ]
            },
            {
                question: "How has the digital age influenced how people cook?",
                answers: [
                    { text: "By making ingredients cheaper to buy online", correct: false },
                    { text: "By providing video tutorials to learn techniques", correct: true },
                    { text: "By replacing the need for healthy food", correct: false },
                    { text: "By making restaurants more popular than homes", correct: false }
                ]
            },
            {
                question: "What is a long-term result of eating nutrient-dense meals?",
                answers: [
                    { text: "Feeling tired during exams", correct: false },
                    { text: "Gaining sustained energy for success", correct: true },
                    { text: "Finding cooking more difficult", correct: false },
                    { text: "Saving money for fast food", correct: false }
                ]
            }
        ]
    },
    {
        paragraph: "Acquiring a secondary language is more than just a hobby; it is a cognitive exercise that significantly enhances brain function. Being bilingual allows individuals to communicate effectively with diverse populations and understand different global perspectives. Furthermore, it opens up entertainment opportunities, such as watching international cinema without the need for subtitles or enjoying foreign literature in its original form. In the modern era, many students utilize specialized mobile applications to maintain a daily practice routine. Although the process requires significant time and patience, it ultimately makes the brain more resilient, adaptable, and analytically sharp.",
        questions: [
            {
                question: "According to the text, what is a cognitive benefit of learning a language?",
                answers: [
                    { text: "It makes you sleep longer", correct: false },
                    { text: "It enhances brain function and resilience", correct: true },
                    { text: "It helps you forget your first language", correct: false },
                    { text: "It makes learning hobbies easier", correct: false }
                ]
            },
            {
                question: "How does being bilingual change how someone experiences movies?",
                answers: [
                    { text: "They no longer need to watch them", correct: false },
                    { text: "They can watch them without subtitles", correct: true },
                    { text: "They can only watch movies in their own country", correct: false },
                    { text: "They can make their own movies easily", correct: false }
                ]
            },
            {
                question: "What is required to successfully learn a new language?",
                answers: [
                    { text: "Very expensive mobile applications", correct: false },
                    { text: "Significant time and patience", correct: true },
                    { text: "The ability to travel every week", correct: false },
                    { text: "A background in cinema and art", correct: false }
                ]
            }
        ]
    },
    {
        paragraph: "Mars, frequently called the 'Red Planet' due to its iron-rich soil, has been a primary focus of astronomical research for decades. As the fourth planet from the sun, it possesses a thin atmosphere and a surface characterized by giant volcanoes, deep canyons, and vast polar ice caps. Scientists are particularly interested in Mars because evidence suggests that liquid water may have flowed across its surface billions of years ago. By sending robotic rovers to explore the rocky terrain, space agencies hope to determine if the planet was ever capable of supporting microbial life. Looking forward, there are ambitious plans to eventually send human astronauts to Mars for direct exploration.",
        questions: [
            {
                question: "Why is Mars often referred to as the 'Red Planet'?",
                answers: [
                    { text: "Because it is very close to the sun", correct: false },
                    { text: "Because of its iron-rich soil", correct: true },
                    { text: "Because it is covered in hot volcanoes", correct: false },
                    { text: "Because it has red ice caps", correct: false }
                ]
            },
            {
                question: "What evidence are scientists looking for regarding Mars' history?",
                answers: [
                    { text: "Signs of ancient liquid water", correct: true },
                    { text: "Evidence of golden mountains", correct: false },
                    { text: "Proof that humans lived there before", correct: false },
                    { text: "A way to move the planet closer to Earth", correct: false }
                ]
            },
            {
                question: "How are space agencies currently exploring the terrain of Mars?",
                answers: [
                    { text: "By sending human astronauts today", correct: false },
                    { text: "By using robotic rovers", correct: true },
                    { text: "By looking through small telescopes only", correct: false },
                    { text: "By planting trees to change the atmosphere", correct: false }
                ]
            }
        ]
    }
];

let topicIndex = 0;
let subQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timeLeft = 20 * 60; 
let timerInterval;
const timerElement = document.getElementById("timer");

function startTimer() {
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds} ⏱️`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showScore(); 
        } else {
            timeLeft--;
        }
    }, 1000);
}

function startQuiz() {
    topicIndex = 0;
    subQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    timeLeft = 20 * 60; 
    clearInterval(timerInterval); 
    nextButton.innerHTML = "Next";
    nextButton.classList.remove("restart-btn");
    showQuestions();
    startTimer();
}

function showQuestions() {
    resetState();
    const currentTopic = quizData[topicIndex];
    const currentQuestion = currentTopic.questions[subQuestionIndex];

    readingTextElement.innerHTML = currentTopic.paragraph;
    readingTextElement.style.display = "block";

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
    clearInterval(timerInterval); 
    resetState(); 
    
    readingTextElement.style.display = "none"; 
    
    const totalQuestions = quizData.length * 3;
    let scoreHTML = `<h2 dir="rtl">النتيجة: ${score} / ${totalQuestions}</h2>`;
    
    const mistakes = userAnswers.filter(answer => !answer.isCorrect);

    if (score === totalQuestions) {
        scoreHTML += `<p dir="rtl">أحسنت! درجة كاملة. 💯</p>`;
    } else if (mistakes.length > 0) {
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

window.addEventListener("load", startQuiz);