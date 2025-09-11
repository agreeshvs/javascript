console.log('Functions in JavaScript');
console.log('--------------------------');
function sum(a,b) {
    return `${a}+${b} = ${a+b}`;
}

const calc = function sum(a,b){ // named function expression
    return `${a}+${b} = ${a+b}`;
}

const calc12 = function(a,b){ // anonymous function expression
    return `${a}+${b} = ${a+b}`;
}


const arrowSum = (a,b) => `${a}+${b} = ${a+b}`; // arrow function

const randomNum = () => {
    return  Math.floor( Math.random()*10 );
}

const double = a => a*2; // single parameter, single line body

const triple = (a) => { // Return statement needed for block body
    return ` ${a}*3 = ${a*3}`;
}

// Pure Functions
// A pure function is a function that, given the same input, 
// will always return the same output, 
// and does not have any side effects 
// (like modifying external variables or states).

// Example of a pure function
function pureAdd(a, b) {
    return a + b;
}

// Impure function
// An impure function is a function that may produce different 
// outputs
// for the same input or has side effects.
// Mutating external variables is a common example of a side effect.
let counter = 0; // external variable
function impureAdd(a) {
    counter += 1; // modifies external variable
    return a + counter;
}


// Default Parameters
// Default parameters allow named parameters to be initialized with default values
// if no value or undefined is passed.

function greet(name = 'Guest') { // 'Guest' is the default value
    return `Hello, ${name}!`;
}


// Rest Parameters
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Example usage

console.log('Uses default parameter - ', greet()); // Uses default parameter
console.log('Overrides default parameter - ',greet('Alice')); // Overrides default parameter

console.log('Rest Parameters - ',sumAll(1, 2, 3, 4)); // Sums all arguments


// Recursion
// A recursive function is a function that calls itself in order to solve a problem.
function factorial(n) {
    if (n <= 1) return 1;   // base case
    return n * factorial(n - 1); // recursive case
}

console.log('Recursion - Factorial of 5:', factorial(5)); // Outputs: 120

const [x,y] = [randomNum(), randomNum()];

console.log('Function declaration :: ',sum(x,y));
console.log('Named function expression :: ', calc(x,y));
console.log('Anonymous function expression :: ',calc12(x,y));
console.log('Arrow function :: ', arrowSum(x,y));
console.log('Arrow function with block body :: ', randomNum());
console.log('Unary function :: ', double(randomNum()));
console.log('Unary function with block body :: ', triple(randomNum()));
console.log('--------------------------');