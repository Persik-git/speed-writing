let timeLeft = 60;
let timer;

function startTimer() {
    clearInterval(timer); 
    timeLeft = 60;
    updateDisplay();

    timer = setInterval(function () {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Время вышло!");
        }
    }, 1000);
}

function updateDisplay() {
    document.getElementById("timer-display").textContent = "Осталось: " + timeLeft + " сек.";
}

document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".start-button");
    button.insertAdjacentHTML("afterend", '<p id="timer-display">Осталось: 60 сек.</p>');
    button.addEventListener("click", startTimer);
});
