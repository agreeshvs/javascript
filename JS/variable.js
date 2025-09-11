// Datatypes in JavaScript
console.log('Datatypes in JavaScript');
console.log('--------------------------');
// var, let, const
var x = 10; // function-scoped or globally-scoped
let y = 20; // block-scoped
const z = 30; // block-scoped, cannot be reassigned

// Data Types
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let arr = [1, 2, 3]; // Array
let obj = { name: "Alice", age: 25 }; // Object
let undef = undefined; // Undefined
let nul = null; // Null
let sym = Symbol('sym'); // Symbol


// Dynamic Typing
let dynamicVar = 100; // Initially a number
console.log('dynamicVar (number):', dynamicVar);
dynamicVar = "Now I'm a string"; // Now a string
console.log('dynamicVar (string):', dynamicVar);
dynamicVar = true; // Now a boolean
console.log('dynamicVar (boolean):', dynamicVar);
dynamicVar = { key: 'value' }; // Now an object
console.log('dynamicVar (object):', dynamicVar);
dynamicVar = [1, 2, 3]; // Now an array
console.log('dynamicVar (array):', dynamicVar);
dynamicVar = null; // Now null
console.log('dynamicVar (null):', dynamicVar);
dynamicVar = undefined; // Now undefined
console.log('dynamicVar (undefined):', dynamicVar);



// Coercion
// Coercion is the automatic or implicit conversion of values from one data type to another

console.log('Coercion Examples:');
let coercedVar = '5' + 10; // '510' (string concatenation)
console.log('Coerced Var ("5" + 10):', coercedVar);
coercedVar = '5' - 2; // 3 (number subtraction)
console.log('Coerced Var ("5" - number):', coercedVar);
coercedVar = '5' * '2'; // 10 (number multiplication)
console.log('Coerced Var ("5" * "2"):', coercedVar);
coercedVar = '10' / 2; // 5 (number division)
console.log('Coerced Var ("5" / true):', coercedVar);
coercedVar = 5 + true; // 6 (true is coerced to 1)
console.log('Coerced Var (5 + true):', coercedVar);
coercedVar = 5 + false; // 5 (false is coerced to 0)
console.log('Coerced Var (5 + false):', coercedVar); 


const value = 0n; // BigInt
console.log('BigInt value:', value);
console.log('Type of BigInt value:', typeof value);


const val = []; // Empty array
console.log('Empty array:', val);

if( val ){
    console.log('Empty array is truthy');
    // In JavaScript, an empty array is considered truthy
    // because it is an object and all objects are truthy
    // even if they are empty.
    // This is due to reference type behavior of objects in JavaScript.
}
else{
    console.log('Empty array is falsy');
}