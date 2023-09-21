const timeInSeconds = document.getElementById('sec');
const timeInMinutes = document.getElementById('min');
const timeInHours = document.getElementById('hrs');
let countTime;

function calcTime(sec, min, zeroing) {
    sec = Number(timeInSeconds.textContent);
    min = Number(timeInMinutes.textContent);
    hrs = Number(timeInHours.textContent);
    sec++;
    if (zeroing) {
        sec = 0;
        min = 0;
        hrs = 0;
    }
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    if (min >= 60) {
        min = 0;
        hrs++;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (hrs < 10) {
        hrs = '0' + hrs;
    }
    timeInSeconds.textContent = sec;
    timeInMinutes.textContent = min;
    timeInHours.textContent = hrs;
}

countTime = setInterval(calcTime, 1000);

const change = src => {
    document.getElementById('main').src = src
}