// === Program to Convert Objects to Strings === //


// :::=> Using JSON.stringify()

const person = {
    name: 'Jack',
    age: 27
}

const result =  JSON.stringify(person);

console.log(result);             // {"name":"Jack","age":27}
console.log(typeof result);     //  string



// :::=> Using String()

const person1 = {
    name: 'Jerry',
    age: 28
}

const result1 = String(person);
const result2 = String(person['name']);

console.log(result1);   // [object Object]
console.log(result2);  //  Jerry

console.log(typeof result1);  // string