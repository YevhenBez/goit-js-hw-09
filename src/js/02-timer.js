// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]');

const inputField = document.querySelector('#datetime-picker');

const daysField = document.querySelector('.value[data-days]');

const hoursField = document.querySelector('.value[data-hours]');

const minutesField = document.querySelector('.value[data-minutes]');

const secondsField = document.querySelector('.value[data-seconds]');

btnStart.disabled = !btnStart.disabled;

let dateSelected;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        dateSelected = selectedDates[0];
    },
};

flatpickr(inputField, options);

inputField.addEventListener("input", () => {
    setTimeout(() => {
        if (dateSelected <= options.defaultDate) {
            window.alert("Please choose a date in the future");
        }
    }, 1000);
}
);

inputField.addEventListener("input", () => {
    setTimeout(() => {
        if (dateSelected > options.defaultDate) {
        btnStart.disabled = !btnStart.disabled;
    }
    }, 1000);
}
);

let timerId;

let readyTime;

let readyTimeformatted;

btnStart.addEventListener("click", () => {
    timerId = setInterval(() => {
        const options = {
            enableTime: true,
            time_24hr: true,
            defaultDate: new Date(),
            minuteIncrement: 1,
            onClose(selectedDates) {
                console.log(selectedDates[0]);
                dateSelected = selectedDates[0];
            },
        };
        const dateSelectedInMs = dateSelected.getTime();
        const defaultDateInMs = options.defaultDate.getTime();
        const ms = dateSelectedInMs - defaultDateInMs;

        readyTime = convertMs(ms);

        const readyTimeformattedObj = addLeadingZero(readyTime);

        daysField.textContent = readyTimeformattedObj.days;

        hoursField.textContent = readyTimeformattedObj.hours;

        minutesField.textContent = readyTimeformattedObj.minutes;

        secondsField.textContent = readyTimeformattedObj.seconds;

        if (daysField.textContent === "00" && hoursField.textContent === "00" && minutesField.textContent === "00" && secondsField.textContent === "00") {
            clearInterval(timerId);
        }
    }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {

    return readyTimeformatted = {days: `${days.toString().padStart(2, "0")}`, hours: `${hours.toString().padStart(2, "0")}`, minutes: `${minutes.toString().padStart(2, "0")}`, seconds: `${seconds.toString().padStart(2, "0")}`};

}