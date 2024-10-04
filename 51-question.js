// === Program to check if a string starts with another string === // 

// :::=> Using the startsWith() method

const string = 'hello world';

const toCheckString = 'he';

if(string.startsWith(toCheckString)) {
    console.warn(`The string starts with "he".`);
}
else {
    console.warn(`The string does not starts with "he".`);
}

// Output: The string starts with "he".



// :::=> Using the lastIndexOf() method

const str = 'hello world';

const toCheckStr = 'he';

let result = str.lastIndexOf(toCheckStr, 0) === 0;
if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// Output: The string starts with "he".




// :::=> Using RegEx

const strn = 'hello world';

const pattern = /^he/;

let res = pattern.test(strn);

if(res) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// Output: The string starts with "he".