const body = document.querySelector("body");

const pGoBack = body.firstElementChild;

const btnStart = pGoBack.nextElementSibling;

const btnStop = btnStart.nextElementSibling;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timerId = null;

btnStart.addEventListener("click", event => {
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
}, 1000);
    btnStart.disabled = !btnStart.disabled;
});