const startButtonSelector = ".button__start";
const stopButtonSelector = ".button__stop";
const hoursInputSelector = "#hours";
const minutesInputSelector = "#minutes";
const secondsInputSelector = "#seconds";

const hoursInput = document.querySelector(hoursInputSelector);
const minutesInput = document.querySelector(minutesInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);
const startButton = document.querySelector(startButtonSelector);
const stopButton = document.querySelector(stopButtonSelector);

let hours;
let minutes;
let seconds;
let remainingTime;
const delaySeconds = 1

function startTimer(event) {
    event.preventDefault();
    console.log('start timer');

    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);

    remainingTime = hours * 3600 + minutes * 60 + seconds;
    intervalId = setInterval(updateTimer, delaySeconds * 1000)

    hideElement(startButton);
    showElement(stopButton);

    document.documentElement.requestFullscreen();
    console.log(hours, minutes, seconds);
    console.log(remainingTime);
}

for (let i = remainingTime; i >= 0; i--) {
    updateTimer();
    console.log('remainingTime: ', remainingTime);
}

function updateTimer() {
    if (remainingTime > 0) {
        remainingTime = remainingTime - 1;

        hours = Math.floor(remainingTime / 3600);
        minutes = Math.floor(remainingTime % 3600 / 60);
        seconds = remainingTime % 60;

        hoursInput.value = hours.toString().padStart(2, '0');
        minutesInput.value = minutes.toString().padStart(2, '0');
        secondsInput.value = seconds.toString().padStart(2, '0');
    } else {
        stopTimer();
    }
}

function stopTimer() {
    console.log('stop timer');
    clearInterval(intervalId);
    hideElement(stopButton);
    showElement(startButton);
    document.exitFullscreen();
}

function hideElement(element) {
    element.classList.add("hide");
}

function showElement(element) {
    element.classList.remove("hide");
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
