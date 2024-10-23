//  === Program to Add Element to Start of an Array === //

// :::=> Using unshift() 

function addElement(arr) {

    // adding new array element
    arr.unshift(4);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
// passing array argument
addElement(array);   

// Output: [4, 1, 2, 3]



// :::=> Using splice()

function addElement1(arr) {

    // adding element to array
    arr.splice(0, 0, 4);
    
    console.log(arr);
}

const array1 = [1, 2, 3];

// calling the function
addElement1(array1);

// Output: [4, 1, 2, 3]



// :::=> Using spread operator

// program to add element to an array

function addElement2(arr) {

    // adding element to array
    arr = [4, ...arr];
    
    console.log(arr);
}

const array2 = [1, 2, 3];

// calling the function
addElement2(array2);

// Output: [4, 1, 2, 3]



// :::=> Using concat()

// program to add element to an array

function addElement3(arr) {

    // adding element to array
    arr = [4].concat(arr);
    
    console.log(arr);
}

const array3 = [1, 2, 3];

// calling the function
addElement3(array3);

// Output: [4, 1, 2, 3]
