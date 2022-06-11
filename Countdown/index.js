let timer = 60;
const countDown = document.querySelector("#counter");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#restart");

let intervalID = null;
startButton.addEventListener('click', function() {

    intervalID = setInterval(() => {
        if (timer >= 1) {
            countDown.textContent = --timer;
        }

    }, 1000);
})
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);


function stopTimer() {
    clearInterval(intervalID);

}

function resetTimer() {
    clearInterval(intervalID);
    timer = 60;
    countDown.textContent = timer;

}