/**
 * ৫. ঘরের ক্ষেত্রফল (Square Feet to Square Meter)
 *
 * ফ্ল্যাট বা জমি কেনার সময় আমরা স্কয়ার ফুটে (Sq Ft) হিসাব করি, কিন্তু সরকারি কাগজপত্রে অনেক সময় স্কয়ার মিটার (Sq Meter) লাগে।
 *
 * একটি ফাংশন লিখুন যা ইনপুট হিসেবে স্কয়ার ফুট গ্রহণ করবে।
 * সেটিকে স্কয়ার মিটারে কনভার্ট করে রিটার্ন করবে।
 * (সূত্র: ১ স্কয়ার ফুট = ০.০৯২৯০৩ স্কয়ার মিটার)
 */

function convertSquareFeetToSquareMeter(squareFeet) {
  const squareMeter = squareFeet * 0.092903;
  return `${squareFeet} Sq Ft = ${squareMeter.toFixed(2)} Sq Meter.`;
}

const squareFeetValue = 4;
const squareMeterValue = convertSquareFeetToSquareMeter(squareFeetValue);
console.log(squareMeterValue);
