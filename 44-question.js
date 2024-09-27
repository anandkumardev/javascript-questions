// === Program to Check if a Key Exists in an Object === //

// :::=> Check if Key Exists in Object Using in Operator

const person = {
    id: 1,
    name: 'John',
    age: 23
}

// check if key exists
const hasKey = 'name' in person;

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}

// The key exists.


// :::=> Check if Key Exists in Object Using hasOwnProperty()

const person1 = {
    id: 2,
    name: 'Jacky',
    age: 24
}

//check if key exists
const hasKey1 = person1.hasOwnProperty('name');

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}

// The key exists.