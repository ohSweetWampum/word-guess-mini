// Global variables
var words = ["JavaScript", "html", "cascading style sheets", "github", "command line", "Code", "computer", "element"];
var randomlyChooseIndexNumber = Math.floor(Math.random() * words.length);
var selectedWord = words[randomlyChooseIndexNumber];
var wins = 0;
var losses = 0;
var remainingGuesses = selectedWord.length;
var guessedLetters = [];

// Set up references to HTML elements
var userInputElement = document.getElementById("user-input");
var winsElement = document.querySelector(".wins span");
var lossesElement = document.querySelector(".losses span");
var startButtonElement = document.querySelector(".start-button");
var countdownClockElement = document.getElementById("countdownClock");

// Function to update the display of guessed letters
function updateWordDisplay() {
    var wordDisplay = "";
    for (var i = 0; i < selectedWord.length; i++) {
        // If the letter has been guessed, display it, otherwise display a blank
    if (guessedLetters.includes(selectedWord[i])) {
        wordDisplay += selectedWord[i] + " ";
    } else {
        wordDisplay += "_ ";
    }
    }
    // Update the input field with the current state of the guessed word
    userInputElement.value = "";
    userInputElement.placeholder = wordDisplay.trim();
}
function handleUserInput() {
    var userGuess = userInputElement.value.toLowerCase();
    if (!guessedLetters.includes(userGuess)) {
      guessedLetters.push(userGuess);
      if (selectedWord.includes(userGuess)) {
        remainingGuesses--;
        if (remainingGuesses === 0) {
          wins++;
          winsElement.textContent = wins;
          countdownClockElement.textContent = "You won!";
          startButtonElement.textContent = "Play again";
          startButtonElement.disabled = false;
          clearInterval(timerInterval);
        }
      } else {
        remainingGuesses--;
        if (remainingGuesses === 0) {
          losses++;
          lossesElement.textContent = losses;
          countdownClockElement.textContent = "You lost!";
          startButtonElement.textContent = "Play again";
          startButtonElement.disabled = false;
          clearInterval(timerInterval);
        }
      }
      updateWordDisplay();
    }
  }

// Set up event listeners
userInputElement.addEventListener("input", handleUserInput);

startButtonElement.addEventListener("click", function () {
    randomlyChooseIndexNumber = Math.floor(Math.random() * words.length);
    selectedWord = words[randomlyChooseIndexNumber];
    remainingGuesses = selectedWord.length;
    guessedLetters = [];
    updateWordDisplay();
    winsElement.textContent = wins;
    lossesElement.textContent = losses;
    startButtonElement.textContent = "Start!";
    startButtonElement.disabled = true;
    countdownClockElement.textContent = "Time Left: 30 seconds";
    var secondsLeft = 30;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        countdownClockElement.textContent = "Time Left: " + secondsLeft + " seconds";
        // if the guess is incorrect
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            losses++;
            lossesElement.textContent = losses;
            startButtonElement.textContent = "Play again";
            startButtonElement.disabled = false;
            countdownClockElement.textContent = "You lost!";
        }
    }, 1000);
});

