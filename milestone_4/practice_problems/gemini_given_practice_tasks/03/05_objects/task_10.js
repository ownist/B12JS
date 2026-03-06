/**
 * একটি বাক্যের প্রতিটি অক্ষর কতবার আছে তা গুণতে হবে। ইনপুট হিসেবে একটি স্ট্রিং নিন (যেমন: "banana")। আউটপুট হিসেবে একটি অবজেক্ট তৈরি করুন যা দেখাবে কোন অক্ষর কয়বার আছে (যেমন: { b: 1, a: 3, n: 2 })।
 */

const word = "Shahed";
const letterCount = {};

for (const letter of word) {
  const letterLowerCase = letter.toLowerCase();

  if (letterCount[letterLowerCase]) {
    letterCount[letterLowerCase] += 1;
  } else {
    letterCount[letterLowerCase] = 1;
  }
}
console.log(letterCount);
