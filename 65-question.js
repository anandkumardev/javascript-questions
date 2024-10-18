// === Program to Check if An Array Contains a Specified Value === //


// :::=> Using Array.includes()

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.includes('javascript');

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}

// Output: Array contains a value.


// :::=> Using Array.indexOf()

const arr = ['you', 'will', 'learn', 'javascript'];

const hasVal = arr.indexOf('javascript') !== -1;

// check the condition
if(hasVal) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}

// Output: Array contains a value.