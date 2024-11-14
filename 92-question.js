// === Program to Check if a Number is Float or Integer === //

// :::=> Using Number.isInteger()

function checkNumber(x) {

    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){
    
        // check if it is integer
        if (Number.isInteger(x)) {
            console.log(`${x} is integer.`);
        }
        else {
            console.log(`${x} is a float value.`);
        }
    
    } else {
        console.log(`${x} is not a number`);
    }
}

checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);

/*  hello is not a number
    44 is integer.
    3.4 is a float value.
    -3.4 is a float value.
    NaN is not a number
*/


// :::=> 

    function checkNumber(x) {

        let regexPattern = /^-?[0-9]+$/;
        
        // check if the passed number is integer or float
        let result = regexPattern.test(x);
        
        if(result) {
            console.log(`${x} is an integer.`);
        }
        else {
            console.log(`${x} is a float value.`)
        }
    
    }
    
    checkNum(44);
    checkNum(-44);
    checkNum(3.4);
    checkNum(-3.4);

/*  44 is an integer.
    -44 is an integer.
    3.4 is a float value.
    -3.4 is a float value. 
*/