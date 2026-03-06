/**
 * ৪. সর্বোচ্চ সংখ্যা নির্ণয় (Find Maximum Price)
 *
 * মনে করুন আপনার কাছে বিভিন্ন পণ্যের দামের একটি অ্যারে (Array) আছে। একটি ফাংশন লিখুন যা এই অ্যারেটি ইনপুট হিসেবে নেবে এবং লুপ ব্যবহার করে সবচেয়ে বেশি দামটি খুঁজে বের করে রিটার্ন করবে।
 */

function findMaxNumber(numbers) {
  let maxNumber = numbers[0];

  // by using for of loop
  for (const num of numbers) {
    if (num >= maxNumber) {
      maxNumber = num;
    }
  }
  // return max number
  return maxNumber;
}

const prices = [20, 65, 40, 80, 10];
const result = findMaxNumber(prices);
console.log(`the max number is: ${result}`);
