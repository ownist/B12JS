// inch to feet conversion function
function convertInchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const inchValue = 75;
const feetValue = convertInchToFeet(inchValue);
console.log(`${inchValue} inch = ${feetValue.toFixed(2)} feet.`);

// convert inch to feet perfectly
function convertInchesToFeet(inches) {
  // find feet value
  const feetFraction = inches / 12;
  const feetNumber = parseInt(feetFraction); // make the value to integer
  const inchesRemainaing = inches % 12;

  // show result
  const result = `${inches} inch = ${feetNumber} feet, ${inchesRemainaing} inch.`;
  return result;
}

const setInchesValue = 75;
const getInchesToFeetValue = convertInchesToFeet(setInchesValue);
console.log(getInchesToFeetValue);

// miles to kilometers
function convertMilesToKilometer(mile) {
  return mile * 1.609344;
}

const mileValue = 8;
const kilometerValue = convertMilesToKilometer(mileValue);
console.log(`${mileValue} mile = ${kilometerValue} km.`);

// kilometer to miles
function convertKilometerToMiles(km) {
  return km * 0.621371192;
}

const kmValue = 4;
const milesValue = convertKilometerToMiles(kmValue);
console.log(`${kmValue} km = ${milesValue} mile.`);
