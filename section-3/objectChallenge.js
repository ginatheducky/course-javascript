const library = [
    {
        title: "My Book",
        author: "Jane Doe",
        status: {
                own: true,
                reading: false,
                read: false,
            },
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "Mockingjay",
        author: "Suzanne Collins",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

// Change read to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// destructure the title and rename it
const { title: firstBook } = library[0];

console.log(firstBook);

// turn into JSON string
const libraryJSON = JSON.stringify(library)

console.log(libraryJSON);