// === Program to Compare Two Strings === //

// :::> Using toUpperCase()

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

// Output: The strings are similar.



// :::> Using RegEx

const str1 = 'JavaScript Program';
const str2 = 'javascript program';

// create regex
const pattern = new RegExp(str1, "gi");

// compare the stings
const result1 = pattern.test(str2)

if(result1) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

// Output: The strings are similar.



// :::> Using localeCompare()

const stringOne = 'JavaScript Program';
const stringTwo = 'javascript program';

const result3 = stringOne.localeCompare(stringTwo, undefined, { sensitivity: 'base' });

if(result3 == 0) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

// Output: The strings are similar.
