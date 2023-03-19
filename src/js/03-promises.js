const form = document.querySelector('.form');

const inputDelay = form.firstElementChild.firstElementChild;

const inputStep = form.firstElementChild.nextElementSibling.firstElementChild;

const btn = form.lastElementChild;

const inputAmount = btn.previousElementSibling.firstElementChild;

console.log(inputAmount);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
