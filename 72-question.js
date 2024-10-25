// === Program to Merge Two Arrays and Remove Duplicate Items === //


// :::=> Using concat() and for Loop

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2);

// output: [1, 2, 3, 5]



// :::=> Using Spread Syntax and Set


function getUniqueAfterMergeFnc(arr1, arr2){

    // merge two arrays
    let arr = [...arr1, ...arr2];

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const arrayOne = [1, 2, 3];
const arrayTwo = [2, 3, 5]

// calling the function
getUniqueAfterMergeFnc(arrayOne, arrayTwo);

// output: [1, 2, 3, 5]