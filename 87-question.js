// === Program to Check If a Variable is of Function Type === //


/// :::=> Using instanceof Operator

function testVariableX(variable) {
    
    if(variable instanceof Function) {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const countX = true;
const x = function() {
    console.log('hello')
};

testVariableX(countX);
testVariableX(x);


/* The variable is not of function type
   The variable is of function type    */


// :::=> Using typeof Operator

function testVariableY(variable) {
    
    if(typeof variable === 'function') {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const countY = true;
const y = function() {
    console.log('hello')
};

testVariableY(countY);
testVariableY(y);

/* The variable is not of function type
   The variable is of function type */


// :::=> Using Object.prototype.toString.call() Method 

function testVariableZ(variable) {
    
    if(Object.prototype.toString.call(variable) == '[object Function]') {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const z = function() {
    console.log('hello')
};

testVariableZ(count);
testVariableZ(z);

/* The variable is not of function type
   The variable is of function type */