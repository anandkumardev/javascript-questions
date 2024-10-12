// === Program to Check Leap Year === //

const prompt = require('prompt-sync')(); // required to use prompt

// :::=> Using if...else

function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);

/*  Enter a year: 2000
    2000 is a leap year
*/


// :::=> Using newDate()

function checkLeapYr(yr) {

    const leap = new Date(yr, 1, 29).getDate() === 29;
    if (leap) {
        console.log(yr + ' is a leap year');
    } else {
        console.log(yr + ' is not a leap year');
    }
}

// take input
const yr = prompt('Enter a year:');

checkLeapYr(yr);

/*  Enter a year: 2000
    2000 is a leap year
*/