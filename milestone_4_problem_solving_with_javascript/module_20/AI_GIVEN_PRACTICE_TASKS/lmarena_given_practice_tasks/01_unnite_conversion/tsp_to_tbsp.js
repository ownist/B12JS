/**
 * ৪. রান্নার পরিমাপ (Teaspoon to Tablespoon)
 *
 * রান্নার রেসিপিতে প্রায়ই চা-চামচ (tsp) এবং টেবিল-চামচ (tbsp) এর হিসাব থাকে।
 *
 * একটি ফাংশন লিখুন যা ইনপুট হিসেবে চা-চামচের (tsp) সংখ্যা নেবে।
 * সেটিকে টেবিল-চামচে (tbsp) কনভার্ট করবে এবং রিটার্ন করবে।
 * (সূত্র: ৩ চা-চামচ = ১ টেবিল-চামচ)
 */

function convertTspToTbsp(tsp) {
  return `${tsp} tsp = ${(tsp / 3).toFixed(2)} tbsp.`;
}

const tspValue = 12;
const tbspValue = convertTspToTbsp(tspValue);
console.log(tbspValue);
