// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]');

const inputField = document.querySelector('#datetime-picker');

btnStart.disabled = !btnStart.disabled;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);

        if (selectedDates[0] <= options.defaultDate) {
            window.alert("Please choose a date in the future");
        } else {
            btnStart.disabled = !btnStart.disabled;
        }
    },
};


flatpickr(inputField, options);




