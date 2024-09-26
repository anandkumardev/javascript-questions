// === Program to Remove a Property from an Object === //

// creating an object
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

// deleting a property from an object
delete student.greet;
delete student['score'];

console.log(student);

/* {
    age: 20,
    hobbies: ["reading", "games", "coding"],
    name: "John"
  }
*/