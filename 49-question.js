// === Program to Create Multiline Strings === //


// :::=>  using the + operator
const message = 'This is a long message\n' + 
    'that spans across multiple lines\n' + 
    'in the code.'

console.log(message);

/*  This is a long message
    that spans across multiple lines
    in the code.  
*/


// :::=>  using \

const message1 = 'This is a long message\n \
that spans across multiple lines\n \
in the code.'

console.log(message1);

/*  This is a long message
    that spans across multiple lines
    in the code.  
*/



// :::=> using Template Literals

const message2 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message2);

/*  This is a long message
    that spans across multiple lines
    in the code.  
*/
