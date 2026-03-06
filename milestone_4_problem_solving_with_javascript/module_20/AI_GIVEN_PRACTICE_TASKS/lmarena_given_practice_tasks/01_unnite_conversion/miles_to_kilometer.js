/**
 * ২. ম্যারাথন রানার (Miles to Kilometer)
 *
 * একজন দৌড়বিদ প্রতিদিন কত মাইল দৌড়ালেন তার হিসাব রাখেন, কিন্তু তার অ্যাপে ডেটা কিলোমিটারে দেখাতে হয়।
 *
 * একটি ফাংশন লিখুন যা ইনপুট হিসেবে মাইল (Miles) গ্রহণ করবে।
 * সেটিকে কিলোমিটারে কনভার্ট করে রিটার্ন করবে।
 * (সূত্র: ১ মাইল = ১.৬০৯৩৪ কিলোমিটার)
 */

function convertMilesToKilometer(miles) {
  return `${miles} mile = ${(miles * 1.60934).toFixed(2)} km`;
}

const mileValue = 8;
const kilometerValue = convertMilesToKilometer(mileValue);
console.log(kilometerValue);
