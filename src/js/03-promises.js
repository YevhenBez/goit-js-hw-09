const form = document.querySelector('.form');

const inputDelay = form.firstElementChild.firstElementChild;

const inputStep = form.firstElementChild.nextElementSibling.firstElementChild;

const btn = form.lastElementChild;

const inputAmount = btn.previousElementSibling.firstElementChild;

let counter = 0;

let positionInOrder = 1;

let delayInOrder;

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  
  const delayStepAmount = {delay: inputDelay.value, step: inputStep.value, amount: inputAmount.value};

  localStorage.setItem("data-from-user", JSON.stringify(delayStepAmount)); 
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const savedDelayStepAmount = localStorage.getItem("data-from-user");

  const parsedDelayStepAmount = JSON.parse(savedDelayStepAmount);

  const amountFromUser = parsedDelayStepAmount.amount;

  delayInOrder = Number(parsedDelayStepAmount.delay);

  const stepFromUser = Number(parsedDelayStepAmount.step);

  while (counter < amountFromUser) {

    const promise = createPromise();

    promise.then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
      
    counter += 1;
    
    positionInOrder += 1;

    delayInOrder += stepFromUser;
  }
}
);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({position: positionInOrder, delay: delayInOrder});
  } else {
    return Promise.reject({position: positionInOrder, delay: delayInOrder});
  }
}