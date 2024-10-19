// === Program to Insert Item in an Array === //

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement();

// Output: [1, 2, 3, 8, 4, 5] 


function insertElem() {
    let array = [1, 2, 3, 4];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    for (let i = array.length; i > index; i--) {

        //shift the elements that are greater than index
        array[i] = array[i-1];
    }

    // insert element at given index
    array[index] = element;

    console.log(array);
}

insertElem();

// Output: [1, 2, 3, 8, 4]