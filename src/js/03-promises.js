const form = document.querySelector('.form');

const inputDelay = form.firstElementChild.firstElementChild;

const inputStep = form.firstElementChild.nextElementSibling.firstElementChild;

const btn = form.lastElementChild;

const inputAmount = btn.previousElementSibling.firstElementChild;

let counter = 0;

let amountFromUser;

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  // event.preventDefault();
  
  const delayStepAmount = {delay: inputDelay.value, step: inputStep.value, amount: inputAmount.value};

  localStorage.setItem("data-from-user", JSON.stringify(delayStepAmount)); 
}

const delayYxxxx = 300;

form.addEventListener("submit", event => {
  event.preventDefault();
  
  while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}
});

const tren = createPromise();

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    // resolve('Done!');
    return Promise.resolve({position: amountFromUser, delay: delayYxxxx});
  } else {
    // Reject
    // reject('Error!');
    return Promise.reject({position: amountFromUser, delay: delayYxxxx});
  }
}

// console.log(tren);

tren.then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

