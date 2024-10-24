const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-btn');
const feedbackElement = document.getElementById('feedback');
const addButton = document.getElementById('add-btn');
const subButton = document.getElementById('sub-btn');
const mulButton = document.getElementById('mul-btn');

let currentQuestion;
let currentAnswer;
let operation = 'addition';

// Generate random numbers and display the math question
function generateQuestion() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    
    if (operation === 'addition') {
        currentQuestion = `${num1} + ${num2}`;
        currentAnswer = num1 + num2;
    } else if (operation === 'subtraction') {
        if (num1 < num2) [num1, num2] = [num2, num1]; // Ensure no negative results
        currentQuestion = `${num1} - ${num2}`;
        currentAnswer = num1 - num2;
    } else if (operation === 'multiplication') {
        num1 = Math.floor(Math.random() * 10); // Smaller numbers for multiplication
        num2 = Math.floor(Math.random() * 10);
        currentQuestion = `${num1} × ${num2}`;
        currentAnswer = num1 * num2;
    }

    questionElement.innerText = currentQuestion;
}

// Handle answer submission
submitButton.addEventListener('click', () => {
    const userAnswer = Number(answerInput.value);
    
    if (userAnswer === currentAnswer) {
        feedbackElement.style.color = 'green';
        feedbackElement.innerText = "Correct! Well done!";
    } else {
        feedbackElement.style.color = 'red';
        feedbackElement.innerText = `Oops! The correct answer was ${currentAnswer}.`;
    }

    setTimeout(() => {
        feedbackElement.innerText = '';
        answerInput.value = '';
        generateQuestion();
    }, 2000);
});

// Change the operation when buttons are clicked
addButton.addEventListener('click', () => {
    operation = 'addition';
    generateQuestion();
});

subButton.addEventListener('click', () => {
    operation = 'subtraction';
    generateQuestion();
});

mulButton.addEventListener('click', () => {
    operation = 'multiplication';
    generateQuestion();
});

// Initialize the game with a question
generateQuestion();
