/**
 * ১. উচ্চতা কনভার্টার (Height: Inch to Feet-Inch)
 *
 * সাধারণত আমাদের উচ্চতা ইঞ্চিতে (Inches) মাপা হলেও আমরা সেটাকে "ফুট এবং ইঞ্চি" (যেমন: ৫ ফুট ৭ ইঞ্চি) হিসেবে বলতে পছন্দ করি।
 *
 * একটি ফাংশন লিখুন যা ইনপুট হিসেবে শুধু মোট ইঞ্চি (যেমন: 65) গ্রহণ করবে।
 * ফাংশনটি হিসাব করে একটি স্ট্রিং রিটার্ন করবে, যা বলে দেবে কত ফুট এবং কত ইঞ্চি। (উদাহরণ: ইনপুট 65 হলে আউটপুট হবে "5 feet
 * inch"। ইনপুট 70 হলে আউটপুট "5 feet 10 inch").
 */

function convertInchesToFeet(inches) {
  const feetNumber = parseInt(inches / 12);
  const inchesNumber = inches % 12;
  return `${inches} inch = ${feetNumber} feet, ${inchesNumber} inch`;
}

const inchesValue = 64;
const feetValue = convertInchesToFeet(inchesValue);
console.log(feetValue);
