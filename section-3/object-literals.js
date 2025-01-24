// OBJECT LITERALS

let x;

const person = {
    name: "Jane Doe",
    age: 30,
    isAdmin: true,
    address: {
        street: "123 Main st",
        city: "Linz",
        state: "Upper Austria"
    },
    hobbies: ["running", "cooking"],
};

x = person.name;
x = person["age"];
x = person.address.state;
x = person.hobbies[0];

person.name = "John Doe";
person["isAdmin"] = false;

delete person.age;
person.hasChildren = false;

// add functions
person.greet = function () {
    console.log(`Hello, my name is ${this.name}.`);
};

person.greet();
x = person;

console.log(x);