const numbers = [1, 2, 3];

const numbers1 = numbers.slice(0);// slice method
const numbers2 = [].concat(numbers); // concat method
const numbers3 = [...numbers]; // Spread operator
const numbers4 = Array.from(numbers); // Array.from method

/* console.log("numbers1 ", numbers1);
console.log("numbers2 ", numbers2);
console.log("numbers3 ", numbers3);
console.log("numbers4 ", numbers4); 

console.log("Object.assign : ",Object.assign([], numbers)) */


function getFirstTwoElements(arr) {
    let a = arr.slice(0);
    return a.slice(0, 2);
}
/* 
const result = getFirstTwoElements(numbers);
console.log("Result ",result); // Output: [1, 2]

console.log(numbers.map( num => num * 2)) */


const user = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    }
}
const userJson = JSON.stringify(user); // Convert to JSON string
const userFromJson = JSON.parse(userJson); // Parse back to object

userFromJson.address.city = "San Francisco";
console.log("Original User ", user);
console.log("User JSON ", userJson);
console.log("User from JSON ", userFromJson);

/* 
const userCopy = {...user}; // Shallow copy using spread operator
userCopy.address.city = "Los Angeles";
console.log("Original User ", user); // Original user remains unchanged
console.log("User Copy ", userCopy); // User copy reflects the change in nested object

 */