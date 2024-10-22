// === Program to Empty an Array === //

// by Substituting New Array

function emptyArray(arr) {

    // substituting new array
    arr = [];
    
    return arr;
}

const array = [1, 2 ,3];
console.log(array);

// call the function
const result = emptyArray(array);
console.log(result);

/*  [1, 2, 3]
    []          */  


// by Using splice()

function emptyArray1(arr) {

    // substituting new array
    arr.splice(0, arr.length);
    
    return arr;
}

const array1 = [1, 2 ,3];
console.log(array1);

// call the function
const result1 = emptyArray1(array1);
console.log(result1);


//  by Setting Length 0

function emptyArray2(arr) {

    // setting array length to 0
    arr.length = 0;
    
    return arr;
}

const array2 = [1, 2 ,3];
console.log(array2);

// call the function
const result2 = emptyArray2(array2);
console.log(result2);