const timerEl = document.getElementById('tempo');
const marksList = document.getElementById('lista-tempo');
let intervalId = 0;
let timer = 0;
let marks = [];

document.getElementById('iniciar').addEventListener('click', () => {
    const button = document.getElementById('iniciar');
    const action = button.getAttribute('action');

    clearInterval(intervalId);

    if (action == 'start' || action == 'continue') {
        intervalId = setInterval(() => {
            timer += 1;
            setTimer(timer);
    }, 10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else if (action == 'pause') {
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});

document.getElementById('marcar').addEventListener('click', () => {
    marks.push(timer);
    addMarkToList(marks.length, timer);
});

document.getElementById('zerar').addEventListener('click', () => {
    clearInterval(intervalId);
    timer = 0;
    marks = [];
    setTimer(timer);
    marksList.innerHTML = '';
    const button = document.getElementById('iniciar');
    button.setAttribute('action', 'start');
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
});

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredths = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
}

const setTimer = (time) => {
    timerEl.innerText = formatTime(time);
}

const addMarkToList = (markIndex, markTime) => {
    marksList.innerHTML += `<p>Marca ${markIndex}: ${formatTime(markTime)}</p>`;
}