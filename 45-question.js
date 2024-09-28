// === Program to Check Whether a String Starts and Ends With Certain Characters === //

const prompt = require('prompt-sync')(); // required to use prompt

function checkString(str) {

    // check if the string starts with S and ends with G
    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('The string starts with S and ends with G');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
    else if(str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}


// take input
let string = prompt('Enter a string: ');
checkString(string);

/*  Enter a string: String
    The string starts with S but does not end with G
*/


// :::=> Using Regex

function checkStr(str) {

    // check if the string starts with S and ends with G
    if(/^S/i.test(str) && /G$/i.test(str)) {
        console.log('The string starts with S and ends with G');
    }
    else if(/^S/i.test(str)) {
        console.log('The string starts with S but does not ends with G');
    }
    else if(/G$/i.test(str)) {
        console.log('The string starts does not with S but ends with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

// for loop to show different scenario
for (let i = 0; i < 3; i++) {

    // take input
    const string = prompt('Enter a string: ');

    checkStr(string);
}

/* 
    Enter a string: String
    The string starts with S and ends with G
    Enter a string: string
    The string starts with S and ends with G
    Enter a string: JavaScript
    The string does not start with S and does not end with G
*/

