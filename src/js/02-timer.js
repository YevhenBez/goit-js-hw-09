// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]');

const inputField = document.querySelector('#datetime-picker');

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
    }, 1000);
});
