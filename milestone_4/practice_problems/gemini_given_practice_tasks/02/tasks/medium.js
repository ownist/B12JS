/**
 * conditional return
 */
function checkIsEven(num) {
  if (num % 2 === 0) {
    return "Even";
  }
  // na hole false
  return "Odd";
}
// call this 0function
console.log(checkIsEven(5));

/**
 * type of parameters
 */
function checkType(param) {
  const paramType = typeof param;

  if (paramType === "number") {
    return param * 2;
  } else {
    return "Please provide a number";
  }
}
console.log(checkType("[12, 45]"));
