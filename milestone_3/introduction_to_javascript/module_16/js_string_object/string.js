const country = "Bangladesh";
const division = "Dhaka";
const district = `Dhaka`; // template literals
const thana = new String("Mohammadpur"); // kodachit use hobe (eita ekta object)

console.log(typeof country);
console.log(typeof division);
console.log(typeof district);
console.log(typeof thana);

// thana
console.log(thana);

// break
console.log("---------- break ----------");

// array
const numbers = [54, 23, 84, 56, 48];
console.log(numbers.length); // numbers array er moddhe total koita upadan ache seita br korbe
console.log(numbers[1]);
console.log(numbers);

numbers[1] = 11;
console.log(numbers);

console.log("---------- break ----------");

const capital = "Dhaka";
console.log(capital.length);
console.log(capital[0]);
console.log(capital[8]); // undefind

console.log(capital);
capital[0] = "F";
console.log(capital);
