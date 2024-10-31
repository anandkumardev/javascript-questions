// === Program To Perform Intersection Between Two Arrays === //


// :::=> Using Set

function performIntersection(arr1, arr2) {

    // converting into Set
    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let intersectionResult = [];

    for (let i of setB) {
    
        if (setA.has(i)) {
            intersectionResult.push(i);
        }
        
    }
    
    return intersectionResult;

}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);

// Output: [ 1, 3, 5 ]


// :::=> Using filter() Method

function performIntersec(arr1, arr2) {

    const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);

    return intersectionResult;

}

const array3 = [1, 2, 3, 5, 9];
const array4 = [1, 3, 5, 8];

const results = performIntersec(array3, array4);
console.log(results);

// Output: [ 1, 3, 5 ]