const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
    return (operator == '+') ? add(a,b)
        : (operator == '-') ? subtract(a,b)
        : (operator == '*') ? multiply(a,b)
        : (operator == '/') ? divide(a,b)
        : false
    
};

console.log(operate('+', 3, 5));