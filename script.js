let timeLeft = 60;
let timer;
let timerDisplay = document.getElementById("timer-display"); 
let textContainer = document.getElementById("text-container"); 
let startButton = document.querySelector(".start-button");

function startTimer() {
    timeLeft = 60;
    timerDisplay.textContent = timeLeft; 
    clearInterval(timer);

    textContainer.style.display = "block"; // Показываем текст после нажатия кнопки

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Время вышло!");
        }
    }, 1000);
}

startButton.addEventListener("click", startTimer);
