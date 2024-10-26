// === Program to Sort Array of Objects by Property Values === //

// :::=> Sort Array by Property Name

function compareName(a, b) {

    // converting to uppercase to have case-insensitive comparison
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];

console.log(students.sort(compareName));


/*  [{name: "Jack", age: 25},
    {name: "John", age: 24},
    {name: "Sara", age: 24}]     */



// :::=> Sort Array by Property Age

function compareAge(a, b) {

    return a.age - b.age;
}

const studentsDetail = [{name: 'Sara', age:24},{name: 'John', age:22}, {name: 'Jack', age:27}];

console.log(studentsDetail.sort(compareAge));


/*  [{name: "John", age: 22},
    {name: "Sara", age: 24},
    {name: "Jack", age: 27}]     */