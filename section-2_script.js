// SECTION 2: Variables, Data Types & More

// Using console log
console.log();
console.log("Hello World!");
console.log(90);
console.log(20, "Hello", true);

/* 
this is a multiline comment
everything inbetween is commented out.
*/


// ********************************
// VARIABLES
// ********************************

// ways to declare a variable
// var, let, const

let firstName = "Jane";
let lastName = "Doe";
let age= 30;

console.log(firstName, lastName, age);

// Naming Convention
// - only letters, number, underscores and dollar signs
// - can't start with a number

// re-assigning variables
age = 31;
console.log(age);

// const variables:
// - cannot be directly re-assigned
// - must be initialized
const hello = "Hello world!"
console.log(hello);


// ********************************
// DATA TYPES
// ********************************

// there are primitive data types and reference types like object
// the primitive data types are:
// - strings
// - numbers
// - boolean
// - null (intentional absence of any object value)
// - undefined (a variable that has not yet been defined)
// - symbol
// - BigInt (really large number that number type can't handle)

// reference types (objects):
// - object literals
// - arrays
// - functions

console.log(firstName, typeof firstName);
const temp = 98.9;
const hasKids = true;
const aptNumber = null;

console.log(temp, typeof temp);
console.log(hasKids, typeof hasKids);
console.log(aptNumber, typeof aptNumber);

// values are stored on the stack
const fruit = "apple";
const howMuch = 30;

// reference values are stored on the heap
const meal = {
    fruit: "apple",
    howMuch: 40,
};

const name = "John";
let newName = name;
newName = "Johnny";

let newMeal = meal;
newMeal.fruit = "orange";

console.log(name, newName);
console.log(meal, newMeal);


// ********************************
// TYPE CONVERSION
// ********************************

// explicitly convert one type to another
let amount = "100";
console.log(amount, typeof amount);

// amount = parseInt(amount);
// amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount);

// Change number to string
myNum = 100;
// myNum = myNum.toString();
myNum = String(myNum)
console.log(myNum, typeof myNum);

// convert number to boolean
amount = Boolean(amount);
console.log(amount, typeof amount);


// ********************************
// OPERATORS
// ********************************

// Concatenation
x = "Hello" + " world.";
console.log(x);

// Exponent
x = 2**3;
console.log(x);

// Increment
x = 1;
x++;
console.log(x);
x += 5;
console.log(x);

// Comparison
x = 2 == "2";
console.log(x);
x = 2 === "2";
console.log(x);

x = 3 != "3";
x = 3 !== "3";


// ********************************
// STRINGS
// ********************************

let a;
const a_name = "gina";
const a_age = 33;
a = "Hello my name is " + a_name + " and I am " + a_age + " years old.";
console.log(a);

// template literals
b = "Hello my name is ${a_name} and I am ${age} years.";
console.log(b);

// properties and methods
const s = "Hello world!";
x = s.length;
console.log(x);

x = b.toUpperCase();
console.log(x);


// CHALLENGE
const myString = "developer";
const myNewString = myString.slice(0,1).toUpperCase() + myString.slice(1);
console.log(myNewString);