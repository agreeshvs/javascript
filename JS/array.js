const numbers = [1, 2, 3, 4, 5]; // Array of numbers
console.log('Array of numbers:', numbers);

numbers[100] = 101; // Adding an element at index 100
const length = numbers.length; // Length of the array
console.log('Length of array after adding element at index 100:', length);
console.log('Element at index 100:', numbers[100]);
console.log('Element at index 50 (not set):', numbers[50]); // Undefined, as it was not set

// Accessing last element

//first element
console.log('First element of array:', numbers[0]);
//last element
console.log('Last element of array:', numbers[numbers.length - 1]);

console.log(numbers.at(-1)); // Accessing last element using at() method

// Array methods

// Array()

const arr1 = new Array(5); // Creates an array with 5 empty slots
console.log('Array created with new Array(5):', arr1);
console.log('Length of arr1:', arr1.length); // Length is 5

const arr2 = new Array(1, 2, 3); // Creates an array with elements 1, 2, 3
console.log('Array created with new Array(1, 2, 3):', arr2);
console.log('Length of arr2:', arr2.length); // Length is 3

arr2[0] = 0; // Modifying first element
console.log('Modified arr2:', arr2);

// CRUD Operations
/* let fruits = ['Apple', 'Banana', 'Cherry'];
console.log('Initial fruits array:', fruits);

// Create - Adding elements
fruits.push('Date'); // Adds 'Date' at the end
console.log('After push:', fruits);

fruits.unshift('Elderberry'); // Adds 'Elderberry' at the beginning
console.log('After unshift:', fruits);

fruits.splice(2, 0, 'Fig'); // Adds 'Fig' at index 2
console.log('After splice to add Fig at index 2:', fruits);

// Read - Accessing elements
console.log('Element at index 3:', fruits[3]); // Accessing element at index 3
console.log('Element at index -1 (last element):', fruits.at(-1)); // Accessing last element

// Update - Modifying elements
fruits[1] = 'Blueberry'; // Modifying element at index 1
console.log('After updating index 1 to Blueberry:', fruits); */


const num = [51,2,3,4];

// push() - adds item at the end
const newItem = num.push(5); // Adds 5 at the end
console.log('Length new : ',newItem,'array item : ',num);

// pop() - removes last item
const removedItem = num.pop(); // Removes last item
console.log('Removed Item : ',removedItem,'array item : ',num);

// shift

const firstItem = num.shift();
console.log('Shift element : ',firstItem, 'array : ',num);

// unshift
const addedIndex = num.unshift(11);
console.log(num)


// Slice

const slicedElm = num.slice(2);
console.log('sliced element :: ',slicedElm,' array ',num);

// Splice
const spliceItem = num.splice(2,1,89,99,67,33);
console.log('spliceItem :: ',spliceItem,' array ',num);