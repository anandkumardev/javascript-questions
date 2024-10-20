// === Program to Append an Object to an Array === //

// :::=> Using push()

function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);

// Output: [1, 2, 3, {x: 12, y: 8}]


// :::=> Using splice()

function insertObj(arr, obj) {

    // find the last index
    let index = arr.length;

    // appending object to end of array
    arr.splice(index, 0, obj);
    
    console.log(arr);
}

// original array
let array1 = [1, 2, 3];

// object to add
let object1 = {x: 12, y: 8};

// call the function
insertObj(array1, object1);

// Output: [1, 2, 3, {x: 12, y: 8}]


// :::=> Using spread operator

function insertObjt(arr, obj) {

    // append object
    arr = [...arr, obj];

    console.log(arr);
}

// original array
let array2 = [1, 2, 3];

// object to add
let object2 = {x: 12, y: 8};

// call the function
insertObjt(array2, object2);

