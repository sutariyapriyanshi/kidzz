const words = [
    "apple", "banana", "orange", "grape", "cherry", "strawberry", "lemon", "peach",
    "circle", "square", "triangle", "rectangle", "oval", "pentagon", "hexagon", "octagon", "star", "diamond",
    "red", "blue", "green", "yellow", "purple", "black", "white", "pink", "brown",
    "car", "bike", "bus", "truck", "train", "airplane", "boat", "scooter", "helicopter", "bicycle",
    "dog", "cat", "lion", "tiger", "elephant", "giraffe", "zebra", "monkey", "bear", "rabbit","rat",
    "sparrow", "eagle", "parrot", "pigeon", "peacock", "owl", "crow", "swan", "penguin", "flamingo","hippo","rhino",
    "carrot", "potato", "tomato", "onion", "cabbage", "broccoli", "spinach", "cucumber", "pepper", "corn",
    "one","two","three","four","five","six","seven","eight","nine","ten","zero"
];

const scrambledWordElement = document.querySelector(".scrambled-word");
const inputElement = document.getElementById("user-input");
const resultElement = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const newWordBtn = document.getElementById("new-word-btn");
let currentWord = "";
let scrambledWord = "";

// Function to shuffle the letters of a word
function shuffleWord(word) {
    const letters = word.split("");
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join("");
}

// Function to set a new word
function setNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    scrambledWord = shuffleWord(currentWord);
    scrambledWordElement.textContent = scrambledWord;
    inputElement.value = "";
    resultElement.textContent = "";
}

// Function to check if the input matches the word
function checkWord() {
    const userGuess = inputElement.value.toLowerCase();
    if (userGuess === currentWord) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Try again!";
        resultElement.style.color = "red";
    }
}

// Event listeners
submitBtn.addEventListener("click", checkWord);
newWordBtn.addEventListener("click", setNewWord);

// Initialize game with a new word
setNewWord();