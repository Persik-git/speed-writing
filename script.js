let table = document.querySelector('.styled-table')
let startButton = table.querySelector('.start-button')
let timer = table.querySelector('.timer')

let textContainer = document.querySelector('.text-container')
let text = textContainer.querySelector('p').innerHTML
let textUser = textContainer.querySelector('input').value


startButton.addEventListener('click', function(){
    timer.style.display = 'flex'
    textContainer.style.display = 'flex'
    startCountdown()
    startTimer()
})

// Функция для начала отсчета
function startCountdown() {
    timer.innerHTML = "Успей подготовиться!";
    // Запускаем обратный отсчет на 3 секунды
    setTimeout(() => {
        timer.textContent = ""; // Очищаем сообщение
    }, 30000); // Задержка в 3000 миллисекунд (3 секунды)
    startTimer(); // Запускаем таймер на 60 секунд
}

// Функция для 60-секундного таймера
function startTimer() {
    let seconds = 60; 
    const interval = setInterval(() => {
        timer.textContent = "Осталось "+ seconds+" секунд"; // Обновляем отображение времени
        seconds--; // Уменьшаем количество оставшихся секунд
        // Если время закончилось, останавливаем таймер и показываем сообщение
        if (seconds < 0) {
            clearInterval(interval); // Останавливаем интервал
            timer.textContent = "Ты не успел!"; // Показываем сообщение о том, что время истекло
        }
    }, 1000); // Обновляем каждую секунду
}

let textTrue = new Array()
textTrue = text.split('')

let textCheck = new Array()
textCheck = textUser.split('')

let mistake = 0

for(i=0; i<textTrue.length; i++){
    if(textTrue[i] == textCheck[i]){
        textTrue[i].style.color = 'red'
        mistake++
    }
}

//if(mistake == 0){
    
//}
