// === Program to Display Date and Time === //

// get date and time
const date = new Date(2017, 2, 12, 9, 25, 30);

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);


/*
Date: Sun Mar 12 2017
Time: 9:25:30 AM
*/