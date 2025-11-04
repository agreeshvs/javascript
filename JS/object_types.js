/* const user = {age: 30   }; // Object literal notation
user.name = "Alice";

console.log(user.age); // Accessing property using dot notation
console.log(user["name"]); // Accessing property using bracket notation

delete user.age; // Deleting a property
console.log(user) */

/* const user2 = new Object();
user2.name = "Bob";
user2.age = 25;
console.log(user2); */


function createObject(key, value) {
    // return { key: value }; // Using shorthand property names
    return {
        [key]: value
    }; // Using computed property names

}

// console.log(createObject("name", "Charlie")); // { key: 'Charlie' }

const name = "David";
const age = 28;
const user3 = {
    name,
    age,
    greet() {
        return 5
    }
}; // Using shorthand property names
// console.log(user3.greet()); 

const symbol = Symbol("id");
const user4 = {
    [symbol]: 12345,
    name: "Eve"
};
// console.log(user4);

/* for (const key in user3){
    console.log(key);
    console.log(user3[key]);
} */
/* console.log("---------------------------------");
console.log('name' in user3); // true
console.log(symbol in user4); // true
console.log("---------------------------------");

console.log(user3.hasOwnProperty('age')); // true
console.log(user3.hasOwnProperty('toString')); // false */


const salary = {
    john: 50000,
    jane: 60000,
    doe: 70000,

}
let sum = 0;
/* console.log(Object.values(salary).reduce( (acc,currnt) => acc + currnt)); // [50000, 60000, 70000]
console.log(Object.entries(salary)); // [['john', 50000], ['jane', 60000], ['doe', 70000]]
console.log(Object.keys(salary)); // ['john', 'jane', 'doe'] */

const ageData = { age: 35 };
const nameData = { name: "Frank" };
const clonedData = Object.assign({}, ageData,nameData); // Cloning an object
console.log(clonedData); // { age: 35, name: 'Frank' }
console.log(ageData); // { age: 35 } - ageData is not modified

const mergedData = Object.assign(ageData, nameData); // Merging objects
console.log(mergedData); // { age: 35, name: 'Frank' }
console.log(ageData); // { age: 35, name: 'Frank' } - ageData is modified
console.log("---------------------");

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.freeze(obj)); // Freezing the object
obj.a = 10; // This will not change the value of 'a'
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log("---------------------");


Object.seal(obj); // Sealing the object
obj.b = 20; // This will change the value of 'b'
delete obj.c; // This will not delete 'c'
console.log(obj); // { a: 1, b: 20, c: 3 }
console.log("---------------------");
const abc = Object.create({
    greet() {
        return "Hello";
    }
})
abc.name = "George";
console.log(abc.greet()); // "Hello"
console.log(abc.name); // "George"