let screen = document.querySelector('.display');
let display = document.getElementById('typed');
let answer = document.getElementById('answer');
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let clear = document.getElementById('clear');
let backspace = document.getElementById('backspace');
let decimal = document.getElementById('.');
let evaluate = document.getElementById('=');

let currentOperator = '';
let a = null;
let b = null;

let displayed = '';

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
    return (operator == '+') ? add(a,b)
        : (operator == '-') ? subtract(a,b)
        : (operator == '*') ? multiply(a,b)
        : (operator == '/') ? divide(a,b)
        : "ERROR"
};

const addDecimal = (e) => {
    displayed += e.target.id;
    display.textContent = displayed;
};

const testResult = (result) =>{
    //format result if it's a decimal
    let stringResult = String(result);
    let formattedNum = '';
    if (stringResult.includes('.')) {
        formattedNum = result.toFixed(3);
        result = Number(formattedNum);
    }

    if (currentOperator == '/' && b == 0) {
        answer.textContent = `undefined`;
        return false;
    }

    if (isNaN(result)) {
        answer.textContent = 'Math error';
        return false;
    } else if (result === 'ERROR') {
        answer.textContent = 'syntax error';
        return false;
    } else {
        answer.textContent = result;
        return true;
    }
};

const displayOperator = (e) => {
    if (currentOperator) {
        let index = displayed.indexOf(currentOperator);
        b = Number(displayed.slice(index+1));

        let result = operate(currentOperator, a, b);
        
        if (testResult(result)) {
            a = Number(result);
            b = null;
            displayed = result;
            currentOperator = e.target.id;
            displayed += currentOperator;
        } else {
            a = null;
            b = null;
            displayed = '';
            currentOperator = '';
        }

    } else if (displayed === '') {
            displayed = a;
            currentOperator = e.target.id;
            displayed += currentOperator;
            
    } else {
        if (a) {
            displayed = a;
        } else {
            a = Number(displayed);
        }
        currentOperator = e.target.id;
        displayed += currentOperator;
    }

    display.textContent = displayed;
};

const displayNumber = (e) => {
    if (a == answer.textContent && currentOperator === '') {
        displayed = '';
        a = null;
    }
    displayed += e.target.id;
    display.textContent = displayed;
};

const clearScreen = () => {
    answer.textContent = '';
    displayed = '';
    display.textContent = '';
    currentOperator = '';
};

const getAnswer = () => {
    let index = displayed.indexOf(currentOperator);
    b = Number(displayed.slice(index+1));

    let result = operate(currentOperator, a, b);
    
    if (testResult(result)) {
        a = Number(result);
        b = null;
    } else {
        a = null;
        b = null;
        displayed = '';
    }

    
    currentOperator = '';
    display.textContent = displayed;
};

const undoLast = () => {
    let newString = displayed.slice(0, -1);
    displayed = newString;
    display.textContent = newString;
}

number.forEach(button => button.addEventListener('click', displayNumber));
operator.forEach(button => button.addEventListener('click', displayOperator));
clear.addEventListener('click', clearScreen);
backspace.addEventListener('click', undoLast);
decimal.addEventListener('click', addDecimal);
evaluate.addEventListener('click', getAnswer);



















    /*
    currentButton = e.target.textContent;

    let numbers = ['1','2','3','4','5','6','7','8','9','0']

    let operators = ['+', '-','*', '/'];

    if (currentButton === '<--') backSpace();

    if (currentButton === '.') addDecimal();

    if (operators.includes(currentButton)) {
        if (currentOperator) {
            let array = displayed.split(' ');
            console.log(array);

            let a = Number(array[0]);
            let b = Number(array[2]);

            answer.textContent = operate(currentOperator, a, b);
            currentOperator = '';
            displayed = answer.textContent;
        }

        if (answer.textContent) {
            displayed = answer.textContent;
        }

        currentOperator = currentButton;
        displayed += ' ' + currentOperator + ' ';
    }
    if (numbers.includes(currentButton)) {
        displayed += currentButton;
    }

    if (currentButton === '=') {
        let array = displayed.split(' ');
        console.log(array);

        let a = Number(array[0]);
        let b = Number(array[2]);

        answer.textContent = operate(currentOperator, a, b);
        currentOperator = '';
    }

    if (currentButton === 'C') {
        displayed = '';
        answer.textContent = '';
    }

    updatedDisplay.textContent = displayed;
    */

