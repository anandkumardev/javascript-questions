// === Program to Remove Duplicates From Array === //

// :::=> Using indexOf() and push() 

// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);

// output: [1, 2, 3]



// :::=> Using Set


function getUnique1(arr){

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array1 = [1, 2, 3, 2, 3];

// calling the function
getUnique1(array1);

// output: [1, 2, 3]