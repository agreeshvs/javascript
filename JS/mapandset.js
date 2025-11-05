


/**
 * Demonstrates usage of Set, WeakSet, Map, and WeakMap in JavaScript.
 * 
 * - Shows how to create and manipulate Set objects, including adding, deleting, and iterating over items.
 * - Illustrates the uniqueness property of Set and conversion to arrays.
 * - Explains WeakSet usage and how objects become eligible for garbage collection.
 * - Demonstrates Map creation, key-value operations, and storing functions as keys.
 * - Shows initialization of Map with entries and retrieval of keys, values, and entries.
 * - Explains WeakMap usage, including restrictions on key types and garbage collection behavior.
 * 
 * This page serves as a reference for working with JavaScript's collection types for managing unique values and key-value pairs.
 */
// SET

const set_var = new Set([1,2,3,12,3,56,7,2]);
// console.log("Set ", set_var); // 0
set_var.add(4);
set_var.add(2); // Duplicate, won't be added
// console.log("Set after adding 4 and 2 ", set_var); // Set(4) { 1, 2, 3, 4 }

const unique = [...set_var];
// console.log("Unique Array from Set ", unique); // [ 1, 2, 3, 12, 56, 7, 4 ]

// console.log("Set has 3 ", set_var.has(3)); // true

set_var.delete(12);
// console.log("Set after deleting 12 ", set_var); // Set(6) { 1, 2, 3, 56, 7, 4 }

for( const item of set_var){
    // console.log("Set item ", item);
}

/* console.log(set_var.keys()); // SetIterator { 1, 2, 3, 56, 7, 4 }
console.log(set_var.values()); // SetIterator { 1, 2, 3, 56, 7, 4 }
console.log(set_var.entries()); // SetIterator { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 56, 56 ], [ 7, 7 ], [ 4, 4 ] }
 */

let user = {name: "Alice"};
const set1 = new WeakSet([user]);
user = null; // Now the object {name: "Alice"} is eligible for garbage collection
// console.log("WeakSet ", set1); // WeakSet { <items unknown> }


// MAP - Object is a collection of key-value pairs

const map_var = new Map();
console.log("Initial Map ", map_var); // Map(0) {}
map_var.set('a', 1);
map_var.set('b', 2);
map_var.set('c', 3);
const data = () => {};
const data1 = () => {};
map_var.set(data, 'Function Data');
console.log("Map ", map_var); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
console.log("Get key 'a' from Map ", map_var.get('a')); // 1
console.log(map_var.size); // 3
console.log(map_var.keys()); // MapIterator { 'a', 'b', 'c', [Function: data] }
console.log(map_var.values()); // MapIterator { 1, 2, 3, 'Function Data' }
console.log(map_var.entries()); // MapIterator { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ [Function: data], 'Function Data' ] }

const map2 = new Map([["name", "Bob"], ["age", 25]]);
console.log("Map2 ", map2); // Map(2) { 'name' => 'Bob', 'age' => 25 }


const map3 = new WeakMap();
// map3.set("a","1"); // Error: Invalid value used as weak map key
const objKey = {id: 1};
map3.set(objKey, "Object Value");
console.log("WeakMap ", map3); // WeakMap { { id: 1 } => 'Object Value' }   