// === Program to Extract Given Property Values from Objects as Array === //

// :::=> Using map()

function extractValue(arr, prop) {

    // extract value from property
    let extractedValue = arr.map(item => item[prop]);

    return extractedValue;

}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);

// Output: [ 1, 4, 8 ]


// :::=> Using for Loop

function extractVal(arr, prop) {

    let extractedVal = [];

    for (let i=0; i < arr.length ; ++i) {

        // extract value from property
        extractedVal.push(arr[i][prop]);
    }
    return extractedVal;
}

const objectArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result1 = extractVal(objectArray, 'a');
console.log(result1);

// Output: [ 1, 4, 8 ]