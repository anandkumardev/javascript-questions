// === Program to Add Key/Value Pair to an Object === //

const person = {
    name: 'Monica',
    age: 22,
    gender: 'female'
}

// add a key/value pair
person.height = 5.4;

console.log(person);


/* {
    name: "Monica",
    age: 22,
    gender: "female",
    height: 5.4
    } 
*/


// :::=> Using Square Bracket Notation

const person1 = {
    name: 'Monica',
    age: 22,
    gender: 'female'
}

// add a key/value pair
person1['height'] = 5.4;

console.log(person1);


/* {
    name: "Monica",
    age: 22,
    gender: "female",
    height: 5.4
    }
*/