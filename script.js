let operator;
let answer;
let input; // Ongoing input from user
let input1; // Left operand
let input2; // Right operand

let screen = document.querySelector('#text');
const buttons = document.querySelectorAll('button');

// Adds the button's text content to the screen and receives first argument
function getInput() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            switch (button.id) {
                case 'one':
                    screen.textContent += 1;
                    break;
                case 'two':
                    screen.textContent += 2;
                    break;
                case 'three':
                    screen.textContent += 3;
                    break;
                case 'four':
                    screen.textContent += 4;
                    break;
                case 'five':
                    screen.textContent += 5;
                    break;
                case 'six':
                    screen.textContent += 6;
                    break;
                case 'seven':
                    screen.textContent += 7;
                    break;
                case 'eight':
                    screen.textContent += 8;
                    break;
                case 'nine':
                    screen.textContent += 9;
                    break;
                case 'zero':
                    screen.textContent += 0;
                    break;
                case 'point':
                    if ((screen.textContent).includes(".")) {
                        return;
                    } else {
                        screen.textContent += ".";
                    }
                    break;
                case 'clear':
                    screen.textContent = "";
                    input1 = undefined;
                    input2 = undefined;
                    break;
                case 'slash':
                    operator = "slash";
                    opSubFx();
                    screen.textContent = ""; // Resets the screen's value
                    break;
                case 'times':
                    operator = "times";
                    opSubFx();
                    screen.textContent = "";
                    break;
                case 'plus':
                    operator = "plus";
                    opSubFx();
                    screen.textContent = "";
                    break;
                case 'minus':
                    operator = "minus";
                    opSubFx();
                    screen.textContent = "";
                    break;
                case 'equals':
                    if (typeof(input1) == "undefined") {
                        return;
                    } else if ((screen.textContent) === "") {
                        return;
                    } else {
                        input = screen.textContent;
                        chooseArg(input);
                        operate(input1, input2);
                    }
                    break;
                default:
                    console.log("How did you manage that?");

            }

            console.log(input1, input2);
        });
    });
}

// Carries out multiple functions for each operator
function opSubFx() {
    input = screen.textContent;
    chooseArg(input);
    //checkOngoing();
}

// Determine if input goes into input1 or input2
function chooseArg(input) {
    if (typeof(input1) == "undefined") {
        input1 = Number(input);
    } else {
        input2 = Number(input);
    }
}

// Checks for ongoing arithmetic without using equals button
function checkOngoing() {
    if (typeof(input1) == "number" && typeof(input2) == "number") {
        operate(input1, input2);
        console.log("checkOngoing()");
    }
}

function add(x, y) {
    answer = x + y;
    screen.textContent = answer.toFixed(2);
    input1 = answer;
    input2 = undefined;
}

function subtract(x, y) {
    answer = x - y;
    screen.textContent = answer.toFixed(2);
    input1 = answer;
    input2 = undefined;
}

function multiply(x, y) {
    answer = x * y;
    screen.textContent = answer.toFixed(2);
    input1 = answer;
    input2 = undefined;
}

function divide(x, y) {
    answer = x / y;
    screen.textContent = answer.toFixed(2);
    input1 = answer;
    input2 = undefined;
}

// Return answer to user
function operate(x, y) {
    if (operator == "plus") {
        return add(x, y);
    } else if (operator == "minus") {
        return subtract(x, y);
    } else if (operator == "times") {
        return multiply(x, y);
    } else if (operator == "slash") {
        if (y == 0) {
            screen.textContent = "Fool";
        } else {
            divide(x, y);
        }
    } else {
        return "Error";
    }
}

getInput();