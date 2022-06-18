let operator;
let answer;
let input; // Ongoing input from user
let input1; // Left operand
let input2; // Right operand
let division;
let addition;
let subtraction;
let multiplication;

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
                case 'clear':
                    screen.textContent = "";
                    input1 = undefined;
                    input2 = undefined;
                    break;
                case 'slash':
                    operator = "slash";
                    input = screen.textContent;
                    chooseArg(input);
                    screen.textContent = "";
                    break;
                case 'equals':
                    input = screen.textContent;
                    chooseArg(input);
                    operate(input1, input2);
                    break;
                default:
                    console.log("Still in function 1.");

            }

            console.log(input1, input2);
        });
    });
}

// Assigns the screen content to either input1 or input2
function setScreen() {
    if (typeof(input1) == "undefined") {
        screen.textContent = input1;
    } else {
        screen.textContent;
    }
}

// Determine if input goes into input1 or input2
function chooseArg(input) {
    if (typeof(input1) == "undefined") {
        input1 = Number(input);
    } else {
        input2 = Number(input);
    }
}

// Sets the operator to division
function doDiv() {
    division = true;
    addition = false;
    subtraction = false;
    multiplication = false;
}

// Sets the operator to multiplication
function doMult() {
    division = false;
    addition = false;
    subtraction = false;
    multiplication = true;
}

// Sets the operator to addition
function doAdd() {
    division = false;
    addition = true;
    subtraction = false;
    multiplication = false;
}

// Sets the operator to subtraction
function doSub() {
    division = false;
    addition = false;
    subtraction = true;
    multiplication = false;
}

function add(x, y) {
    answer = x + y;
    return answer;
}

function subtract(x, y) {
    answer = x - y;
    return answer;
}

function multiply(x, y) {
    answer = x * y;
    return answer;
}

function divide(x, y) {
    answer = x / y;
    screen.textContent = answer;
    input1 = answer;
    input2;
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
            return "Fool";
        } else {
            divide(x, y);
        }
    } else {
        return "Error";
    }
}

getInput();