/**
 * ২. সেলসিয়াস টু ফারেনহাইট কনভার্টার (Temperature Converter)
 *
 * এমন একটি ফাংশন তৈরি করুন যা প্যারামিটার হিসেবে সেলসিয়াস তাপমাত্রা গ্রহণ করবে এবং ফারেনহাইটে রূপান্তরিত করে সেই মানটি রিটার্ন করবে।
 */

function convertCelsiusToFahrenheight(celsius) {
  // formula = (celsius * 9/5) + 32
  let fahrenheight = (celsius * 9) / 5 + 32;
  return fahrenheight;
}

const cTemp = 20;
const fTemp = convertCelsiusToFahrenheight(cTemp);
console.log(`${cTemp}°C holo ${fTemp}°F`);
