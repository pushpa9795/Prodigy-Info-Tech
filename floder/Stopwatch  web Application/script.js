const timerDisplay = document.querySelector('.timerDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

startBtn.addEventListener('click', () => {
    if (timerId !== null) clearInterval(timerId);
    timerId = setInterval(() => {
        msec++;
        if (msec === 100) {
            msec = 0;
            secs++;
        }
        if (secs === 60) {
            secs = 0;
            mins++;
        }
        timerDisplay.innerHTML = `${String(mins).padStart(2, '0')} : ${String(secs).padStart(2, '0')} : ${String(msec).padStart(2, '0')}`;
    }, 10);
});

stopBtn.addEventListener('click', () => clearInterval(timerId));

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    msec = secs = mins = 0;
    timerDisplay.innerHTML = `00 : 00 : 00`;
});
