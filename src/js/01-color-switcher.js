const body = document.querySelector("body");

const pGoBack = body.firstElementChild;

const btnStart = pGoBack.nextElementSibling;

const btnStop = btnStart.nextElementSibling;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timerId;

btnStop.disabled = !btnStop.disabled;

btnStart.addEventListener("click", event => {
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  
  if (!btnStart.disabled) {
    btnStart.disabled = !btnStart.disabled;
    
    btnStop.disabled = !btnStop.disabled;
}
});

btnStop.addEventListener("click", event => {
  clearInterval(timerId);

  if (!btnStop.disabled) {
    btnStart.disabled = !btnStart.disabled;
    
    btnStop.disabled = !btnStop.disabled;
}
});