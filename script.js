let table = document.querySelector('.styled-table');
let startButton = table.querySelector('.start-button');
let timer = table.querySelector('.timer');

let results = document.querySelector('.test-result');
let time1 = results.querySelector('.time1');
let time2 = results.querySelector('.time2');
let mistakesBlock = results.querySelector('.mistakes');

let textContainer = document.querySelector('.text-container');
let textElement = textContainer.querySelector('.text');
let input = textContainer.querySelector('input');

let originalText = textElement.textContent.trim();
let originalChars = originalText.split("");

let mistakeCount = 0;
let interval = null;

function renderText() {
    textElement.innerHTML = '';
    originalChars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        textElement.appendChild(span);
    });
}

startButton.addEventListener('click', () => {
    results.style.display = 'none';
    timer.style.display = 'flex';
    textContainer.style.display = 'flex';
    input.value = '';
    input.disabled = false;
    input.focus();
    renderText();
    countdownBeforeStart();
});

function countdownBeforeStart() {
    let countdown = 3;
    timer.textContent = `Подготовьтесь: ${countdown}`;
    let countInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            timer.textContent = `Подготовьтесь: ${countdown}`;
        } else {
            clearInterval(countInterval);
            startTest();
        }
    }, 1000);
}

function startTest() {
    let seconds = 60;
    timer.textContent = `Осталось: ${seconds} секунд`;

    interval = setInterval(() => {
        seconds--;
        if (seconds >= 0) {
            timer.textContent = `Осталось: ${seconds} секунд`;
        } else {
            clearInterval(interval);
            finishTest();
        }
    }, 1000);
}

input.addEventListener('input', () => {
    const userInput = input.value;
    const spans = textElement.querySelectorAll('span');
    mistakeCount = 0;

    spans.forEach((span, index) => {
        if (index < userInput.length) {
            if (userInput[index] === originalChars[index]) {
                span.style.color = 'green';
            } else {
                span.style.color = 'red';
                mistakeCount++;
            }
        } else {
            span.style.color = 'black';
        }
    });
});

function finishTest() {
    input.disabled = true;

    if (input.value === originalText) {
        time1.style.display = 'block';
        time2.style.display = 'none';
        mistakesBlock.style.display = 'none';
    } else if (mistakeCount > 0) {
        time1.style.display = 'none';
        time2.style.display = 'none';
        mistakesBlock.textContent = `Вы не прошли тест, вы сделали ${mistakeCount} ошибк(и), попробуйте ещё раз.`;
        mistakesBlock.style.display = 'block';
    } else {
        time1.style.display = 'none';
        mistakesBlock.style.display = 'none';
        time2.style.display = 'block';
    }

    results.style.display = 'block';
}
