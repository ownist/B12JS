function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// direct call
console.log(isEven(2));
console.log(isEven(41));

/**
 * another method
 */
function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  }
  // onnothai return false hoibo
  return false;
}
console.log(isOdd(5));
console.log(isOdd(20));
