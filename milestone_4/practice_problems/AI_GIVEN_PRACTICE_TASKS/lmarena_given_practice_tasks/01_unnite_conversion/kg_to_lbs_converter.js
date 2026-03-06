/**
 * ৫. জিম ওয়েট কনভার্টার (Kg to Lbs)
 *
 * জিমে ডাম্বেল বা মেশিনের ওজন সাধারণত পাউন্ডে (Lbs) থাকে, কিন্তু আমরা অভ্যস্ত কেজিতে (Kg), অথবা এর উল্টোটা।
 *
 * একটি ফাংশন লিখুন যা ইনপুট হিসেবে কেজি (Kg) গ্রহণ করবে।
 * সেটিকে পাউন্ডে (Pounds) কনভার্ট করে রিটার্ন করবে।
 * (সূত্র: ১ কেজি = ২.২০৪৬২ পাউন্ড)
 */

function convertKgToLbs(kg) {
  const pounds = kg * 2.20462262;
  return `${kg} kg = ${pounds.toFixed(2)} pounds`;
}

const kgValue = 13;
const poundsValue = convertKgToLbs(kgValue);
console.log(poundsValue);
