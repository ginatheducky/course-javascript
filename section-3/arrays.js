// ARRAYS & OBJECTS

// Creating Arrays
// ********************************

// Array literal
const numbers = [12, 45, 34, 23];
const mixed = [12, "number", true, null];

// Array Constructor
const fruits = new Array("apple", "grape", "orange");
console.log(fruits);

// length of arrays
console.log(numbers.length);

// change arrays
fruits[2] = "pear";
console.log(fruits);

// add something to the array at the last position
fruits[fruits.length] = "blueberry";
console.log(fruits);


// Basic Array Methods
// ********************************

const arr = [34, 55, 95, 20, 15];
let x;

console.log(arr);

arr.push(100);
arr.pop();
arr.unshift(99);
arr.shift();
arr.reverse();

console.log(arr);

x = arr.includes(20);
x = arr.indexOf(15); // if you put something in that doesn't exist you get a -1
x = arr.slice(1);

// splice does change the initial array
// x = arr.splice(1, 4);

x = arr.slice(1,4);

console.log(x);


// Nesting, Concat & Spread Operator
// ********************************

const myFruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "raspberry"];

//myFruits.push(berries);

const allFruits = [myFruits, berries];
x = allFruits[1][0];

// add arrays together
x = myFruits.concat(berries);
x = [...fruits, ...berries]; //spread operator

// flatten arrays
const myArr = [1, 2, [4, 5], 5, [6, 7]];
x = myArr.flat();

// Static methods on array object
x = Array.isArray(myArr);
x = Array.from("12345");

const g = 1;
const h = 2;
const j = 3;
x = Array.of(g, h, j);

console.log(x);


// CHALLENGES
// ********************************

const arrA = [1, 2, 3, 4, 5];
arrA.push(6);
arrA.reverse();
console.log(arrA);