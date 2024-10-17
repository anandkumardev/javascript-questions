// === Program to Remove Specific Item From an Array === //

// :::=> Using For Loop

function removeItemFromArray(array, n) {
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);

console.log(result);  // [1, 3, 4, 5]



// :::=> Using Array.splice()

function removeItemFromArr(array, n) {
    const index = array.indexOf(n);

    // if the element is in the array, remove it
    if(index > -1) {

        // remove item
        array.splice(index, 1);
    }
    return array;
}

const res = removeItemFromArr([1, 2, 3 , 4, 5], 2);

console.log(res); // [1, 3, 4, 5]