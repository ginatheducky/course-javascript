// another way to create an object

// this is one way - with an object literal
// const todo = {};

//but we could also use an constructor
const todo = new Object();

todo.id = 1;
todo.name = "Buy Mild";
x = todo
console.log(x);


// Spread Operator
const obj1 = { a:1, b:2 };
const obj2 = { c:3, d:4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2); // does the same as the line above

// Arrays
const todos = [
    { id: 1, name: "Buy Milk" },
    { id: 1, name: "Take out trash" },
    { id: 1, name: "Clean Kitchen" }
];

x = todos[0].name;
x = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);
x = todo.hasOwnProperty("name");

console.log(x);