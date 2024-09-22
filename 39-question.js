// === rogram to Create Objects in Different Ways === //

// :::=> Using object literal

const person = { 
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

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

/* object
   John
   reading
   Hello everyone.
  90
*/


// :::=> Using Instance of Object Directly

// program to create JavaScript object using instance of an object
const person1 = new Object ( { 
    name: 'Anand',
    age: 23,
    hobbies: ['playing', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone from person1');
    },
    score: {
        maths: 92,
        science: 83
    }
});

console.log(typeof person1); // object

// accessing the object value
console.log(person1.name);
console.log(person1.hobbies[0]);
person1.greet();
console.log(person1.score.maths);

/* object
   Anand
   playing
   Hello everyone from person1
   92
*/


// :::=> Using Constructor Function

function Person2() {
    this.name = 'Jack',
    this.age = 24,
    this.hobbies = ['drawing', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyonen from person2');
    },
    this.score = {
        maths: 95,
        science: 85
    }

}

const person2 = new Person2();

console.log(typeof person2); // object

// accessing the object value
console.log(person2.name);
console.log(person2.hobbies[0]);
person2.greet();
console.log(person2.score.maths);

/* bject
   Jack
   drawing
  Hello everyonen from person2
  95
*/