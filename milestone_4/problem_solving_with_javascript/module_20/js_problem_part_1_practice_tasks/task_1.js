// Write a function to convert temperature from Celsius to Fahrenheit.

function convertCelsiusToFahrenheit(cel) {
  const fahrenheit = cel * 1.8 + 32;
  return `${cel} deg c = ${fahrenheit} deg f`;
}

const input = 58;
const output = convertCelsiusToFahrenheit(input);
console.log(output);
