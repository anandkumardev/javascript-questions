// === Program to Split Array into Smaller Chunks === //

// :::=> Using Slice() Method

function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }

}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);

// Output: [ 1, 2 ]
//         [ 3, 4 ]
//         [ 5, 6 ]
//         [ 7, 8 ]



// :::=> Using Splice() Method


function splitIntoChunks(arr, chunk) {

    while(arr.length > 0) {

        let tempArray;
        tempArray = arr.splice(0, chunk);
        console.log(tempArray);
    }
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk1 = 2;
splitIntoChunks(array1, chunk1);

// Output: [ 1, 2 ]
//         [ 3, 4 ]
//         [ 5, 6 ]
//         [ 7, 8 ]