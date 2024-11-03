// === Program To Check If A Variable Is undefined or null === //


function checkVariable(variable) {

    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);

/* output:
The variable is neither undefined nor null
The variable is neither undefined nor null
The variable is undefined or null
The variable is undefined or null
*/


// :::=> Using typeof

function checkVariables(variable) {

    if( typeof variable === 'undefined' || variable === null ) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariables;

checkVariables(5);
checkVariables('hello');
checkVariables(null);
checkVariables(newVariables);

/* output:
The variable is neither undefined nor null
The variable is neither undefined nor null
The variable is undefined or null
The variable is undefined or null
*/