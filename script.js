let operator;
let answer;
let input; // Ongoing input from user
let input1; // Left operand
let input2; // Right operand

let screen = document.querySelector('#text');
let newScreen = document.querySelector('#text-2');
const buttons = document.querySelectorAll('button');

// Adds the button's text content to the screen and receives first argument
function getInput() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            switch (button.id) {
                case 'one':
                    if (typeof(input1) == 'undefined') {
                        screen.textContent += 1;
                    } else {
                        screen.textContent = "";
                        newScreen.textContent += 1;
                    }
                    break;
                case 'two':
                    if (typeof(input1) == 'undefined') {
                        screen.textContent += 2;
                    } else {
                        screen.textContent = "";
                        newScreen.textContent += 2;
                    }
                    break;
                case 'three':
                    if (typeof(input1) == 'undefined') {
                        screen.textContent += 3;
                    } else {
                        screen.textContent = "";
                        newScreen.textContent += 3;
                    }
                    break;
                case 'four':
                    if (typeof(input1) == 'undefined') {
                        screen.textContent += 4;
                    } else {
                        screen.textContent = "";
                        newScreen.textContent += 4;
                    }
                    break;
                case 'five':
                    if (typeof(input1) == 'undefined') {
                        screen.textContent += 5;
                    } else {
                        screen.textContent = "";
                        newScreen.textContent += 5;
                    }
                    break;
                case 'six':
                    if (typeof(input1) == 'undefined') {
                        screen.textContent += 6;
                    } else {
                        screen.textContent = "";
                        newScreen.textContent += 6;
                    }
                    break;
                case 'seven':
                    if (typeof(input1) == 'undefined') {
                        screen.textContent += 7;
                    } else {
                        screen.textContent = "";
                        newScreen.textContent += 7;
                    }
                    break;
                case 'eight':
                    if (typeof(input1) == 'undefined') {
                        screen.textContent += 8;
                    } else {
                        screen.textContent = "";
                        newScreen.textContent += 8;
                    }
                    break;
                case 'nine':
                    if (typeof(input1) == 'undefined') {
                        screen.textContent += 9;
                    } else {
                        screen.textContent = "";
                        newScreen.textContent += 9;
                    }
                    break;
                case 'zero':
                    if (typeof(input1) == 'undefined') {
                        screen.textContent += 0;
                    } else {
                        screen.textContent = "";
                        newScreen.textContent += 0;
                    }
                    break;
                case 'point':
                    if (typeof(input1) == 'undefined') {
                        if ((screen.textContent).includes(".")) {
                            return;
                        } else {
                            screen.textContent += ".";
                        }
                    } else {
                        if ((newScreen.textContent).includes(".")) {
                            return;
                        } else {
                            newScreen.textContent += ".";
                        }
                    }
                    break;
                case 'clear':
                    screen.textContent = "";
                    newScreen.textContent = "";
                    input1 = undefined;
                    input2 = undefined;
                    break;
                case 'slash':
                    chooseArg();
                    checkOngoing();
                    operator = "slash";
                    break;
                case 'times':
                    chooseArg();
                    checkOngoing();
                    operator = "times";
                    break;
                case 'plus':
                    chooseArg();
                    checkOngoing();
                    operator = "plus";
                    break;
                case 'minus':
                    chooseArg();
                    checkOngoing();
                    operator = "minus";
                    break;
                case 'equals':
                    if (typeof(input1) == "undefined") {
                        return;
                    } else if ((screen.textContent) === "" && (newScreen.textContent === "")) {
                        return;
                    } else {
                        console.log("Here");
                        chooseArg();
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

// Determine if input goes into input1 or input2
function chooseArg() {
    if (typeof(input1) == 'undefined') {
        input1 = Number(screen.textContent);
    } else {
        input2 = Number(newScreen.textContent);
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
    newScreen.textContent = "";
    screen.textContent = answer.toFixed(2);
    input1 = answer;
    input2 = undefined;
}

function subtract(x, y) {
    answer = x - y;
    newScreen.textContent = "";
    screen.textContent = answer.toFixed(2);
    input1 = answer;
    input2 = undefined;
}

function multiply(x, y) {
    answer = x * y;
    newScreen.textContent = "";
    screen.textContent = answer.toFixed(2);
    input1 = answer;
    input2 = undefined;
}

function divide(x, y) {
    answer = x / y;
    newScreen.textContent = "";
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
            newScreen.textContent = "";
            screen.textContent = "Fool";
        } else {
            divide(x, y);
        }
    } else {
        return "Error";
    }
}

getInput();