// === Program to Merge Property of Two Objects === //

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);

// Output: { name: 'Jack', age: 26, gender: 'male' }



// :::> Using Spread Operator

// object 1
const person1 = {
    name: 'Jack',
    age:26
}

// object 2
const student1 = {
    gender: 'male'
}

// merge two objects
const newObject = {...person1, ...student1};

console.log(newObject);

// Output: { name: 'Jack', age: 26, gender: 'male' }