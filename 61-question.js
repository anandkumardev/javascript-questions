// === Program to Display Current Date === //

// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);

/* Output: Date: Mon Oct 14 2024
           Time: 10:05:32 PM
*/