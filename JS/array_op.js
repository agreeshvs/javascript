const numbers = [1, 2, 3, 4, 5];

function callbackfn(element){
    console.log(element);
}

// numbers.forEach(callbackfn);

/* numbers.forEach( (number) => { // Anonymous function
    console.log(number);
}) */

let sum = 0;
numbers.forEach( number => {
    sum += number;
})
// console.log('Sum of array elements using forEach: ', sum);

numbers.map( number => {
    console.log(number * 2);
})

let filterArray = numbers.filter( number => {
    return number % 2 === 0;
});
console.log('Filtered even numbers using filter(): ', filterArray);

let reduceVa = numbers.reduce( (accumulator, currentValue) => {
    console.log('Accumulator: ', accumulator, ' Current Value: ', currentValue);
    return accumulator + currentValue;
});
console.log('Sum of array elements using reduce(): ', reduceVa);