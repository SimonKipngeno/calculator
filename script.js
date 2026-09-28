//calculator script
const display = document.getElementById('display');
let resultDisplayed = false;

function appendToDisplay(input) {
    if (resultDisplayed) {
        if (/^[0-9.]$/.test(input)) {
            display.value = input;
            resultDisplayed = false;
            return;
        }
        resultDisplayed = false;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = '';
    resultDisplayed = false;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
    resultDisplayed = true;
}

function calculate() {
    calculateResult();
}

function deleteonebyone() {
    display.value = display.value.slice(0, -1);
    resultDisplayed = false;
}