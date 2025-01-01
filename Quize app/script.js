const questions = [                             /*Array to store question and answer */
    {                                           /*In array make object to stor question and answer for that question */
        question: "What is 2 + 2 ?",            //object be like this{key1:value1,key2:value2, key3:value3,} Here we created object for question answer like belowEX.{question:"Q1" ,answer : [{ text : "T1" ,corret:"true"}]}//
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true }

        ]
    },
    {
        question: "Large animal",            //object be like this{key1:value1,key2:value2, key3:value3,} Here we created object for question answer like belowEX.{question:"Q1" ,answer : [{ text : "T1" ,corret:"true"}]}//
        answers: [
            { text: "Cow", correct: false },
            { text: "Elephant", correct: true },
            { text: "Rat", correct: false },
            { text: "Goat", correct: false },

        ]
    },
    {
        question: "Price of maggie",            //object be like this{key1:value1,key2:value2, key3:value3,} Here we created object for question answer like belowEX.{question:"Q1" ,answer : [{ text : "T1" ,corret:"true"}]}//
        answers: [
            { text: "10", correct: false },
            { text: "20", correct: true },
            { text: "30", correct: false },
            { text: "40", correct: false }

        ]
    },
    {
        question: "What is 5 + 7 ?",            //object be like this{key1:value1,key2:value2, key3:value3,} Here we created object for question answer like belowEX.{question:"Q1" ,answer : [{ text : "T1" ,corret:"true"}]}//
        answers: [
            { text: "20", correct: false },
            { text: "45", correct: false },
            { text: "12", correct: true },
            { text: "72", correct: false }

        ]
    }
];

//Let's take all the importent elements as a variable 

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("ne-btn");
const previousButton = document.getElementById("pe-btn");
// const nextpreButton = document.getElementById("nepr");
const container = document.getElementById("COn")

let currentQuestionIndex = 0;
let score = 0;


function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuetion();
}


function showQuetion() {

    /*You can also write "previousButton.style.display = "none";" to remove desierd button */
    // if (currentQuestionIndex == 0) {
    //     nextpreButton.removeChild(previousButton)
    // }
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {    /*in this arrow function answer workind as a parameter which take and declare the parameter named answer by it self  */
        /* let me explain the below code - so to display the pre definfed answer by us we have to creat new buttons and have to set their innerHTML as per the pre define answers after that to add css in those buttons add class with classList.add("classname") it helps to this css properties start on the class name and in the last add those buttons in pre made div (container) using container(predefined variables made by us).appendChild(button) */
        const button = document.createElement("button");
        button.innerHTML = answer.text; //played with answer.text
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {           //palyed with answer.correct
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer)
    }); 
} 
savedata();
// This code is for previuos button but didn,t work
function savedata() {
    localStorage.setItem("dataq", container.innerHTML)
}

function displaydata() {
    container.innerHTML = localStorage.getItem("dataq")
    nextButton.innerHTML = "Next";
}

function resetState() {
    nextButton.style.display = "none";
    previousButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectanswer(e) {
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true"
    if (iscorrect) {
        selectbtn.classList.add("correct")
        score++
    } else {
        selectbtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    if (currentQuestionIndex == 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "block";
    }
    
}

// savedata();
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handlenextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuetion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handlenextButton();
    } else {
        startquiz();
    }
})


startquiz();