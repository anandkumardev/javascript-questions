// === Program to Get File Extension === //

// :::=> Using split() and pop() methods

function getFileExtension(filename){

    // get file extension
    const extension = filename.split('.').pop();
    return extension;
}

// passing the filename
const result1 = getFileExtension('module.js');
console.log(result1);

const result2 = getFileExtension('module.txt');
console.log(result2);

// Output: js, txt



// :::=> Using substring() and lastIndexOf() methods

function getFileExtensions(filename){
    // get file extension
    const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
    return extension;
}

const result3 = getFileExtensions('module.js');
console.log(result3);

const result4 = getFileExtensions('test.txt');
console.log(result4);

// Output: js, txt