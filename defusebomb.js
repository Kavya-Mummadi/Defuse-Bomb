let timerEl = document.getElementById("timer");
let defuseEl = document.getElementById("defuser");

let countDown = 11;
let intervalId = setInterval(function () {
    countDown = countDown - 1;
    timerEl.textContent = countDown;
    if (countDown === 0) {
        timerEl.textContent = "BOOM";
        timerEl.style.color = "red";
        clearInterval(intervalId);
    }
}, 1000);

defuseEl.addEventListener("keydown", function (event) {
    let defuseText = defuseEl.value;
    if (event.key === "Enter" && defuseText === "defuse" && countDown !== 0) {
        timerEl.textContent = "You did it !!";
        timerEl.style.color = "green";
        clearInterval(intervalId);
    }
});