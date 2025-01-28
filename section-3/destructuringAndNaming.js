// Naming

const firstName = "Jane";
const lastName = "Doe";
const age = 30;

const person = {
    firstName: firstName, // if the name and the value are the same, you don't need the value
    lastName, // you can just do it like this
    age,
};

console.log(person.age);


// Destructuring

const todo = {
    id: 1,
    title: "Take out trash",
};

const { id, title } = todo;

console.log(id, title);


// Destructuring Arrays
const numbers = [23, 67, 33, 49];
const [first, second, ...rest] = numbers; // rest would be an array with the rest of the values

console.log(first, second, rest);