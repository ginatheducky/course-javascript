const post = {
    id: 1,
    title: "First Post",
    body: "This is the body.",
};


// Convert to JSON string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str)

const posts = [
    {
        id: 1,
        title: "First Post",
        body: "This is the body.",
    },
    {
        id: 2,
        title: "Second Post",
        body: "This is the body.",
    }
]

const str2 = JSON.stringify(posts);

console.log(str);
console.log(obj);
console.log(str2);