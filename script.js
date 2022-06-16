let operator = null;
let answer = null;

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
    return answer;
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
            return divide(x, y);
        }
    } else {
        return "Error";
    }
}