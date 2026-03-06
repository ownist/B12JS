/**
 * sadharon calculator
 */
function multiply(num1, num2) {
  return num1 * num2;
}

// result ta ekta variable e rakha hocche
const result = multiply(25, 2);
console.log(`Result: ${result}`);

/**
 * name prodorshon
 */
function fullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}
// call this function
fullName("Gennady", "Korotkechive");
