const originalArray = [1, 2, 3];
// copy original array
const copiedArray = [...originalArray];

// change the first element of the copied array to 99
copiedArray[0] = 99;

/** final output */
console.log(originalArray);
console.log(copiedArray);
