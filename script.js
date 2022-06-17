let operator;
let answer;
let input1;
let input2;
let division = false;

let screen = document.querySelector('#text');
const buttons = document.querySelectorAll('button');

// Adds the button's text content to the screen and receives first argument
function firstArg() {   
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
                    screen.textContent = 0;
                    break;
                case 'slash':
                    division = true;
                    input1 = screen.textContent;
                    secondArg();
                    break;
                default:
                    console.log("Still in function 1.");

            }

            console.log(input1, input2);
            console.log("Still in function 1");
        });
    });
}

// Adds the button's content to the screen and receives the second argument
function secondArg() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            screen.textContent = "";
    
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
                    screen.textContent = 0;
                    break;
                case 'equals':
                    if (division == true) {
                        operator = "slash";
                        operate(input1, input2);
                    } else {
                        console.log("Woops");
                    }
                    break;
                default:
                    console.log("Something went wrong.");
            }

            console.log(input1, input2);
        });
    });
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
    console.log(x, y);
    answer = x / y;
    screen.textContent = answer;
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

if (input1 == null) {
    firstArg();
} else {
    secondArg();
}