/**
 * ৩. ফ্রিল্যান্সার ইনকাম (USD to BDT)
 *
 * একজন ফ্রিল্যান্সার ডলারে পেমেন্ট পান, কিন্তু তিনি জানতে চান বাংলাদেশি টাকায় তার পরিমাণ কত।
 *
 * একটি ফাংশন তৈরি করুন যা ইনপুট হিসেবে ডলারের পরিমাণ নেবে।
 * ফাংশনটি সেটিকে টাকায় কনভার্ট করে রিটার্ন করবে।
 * (ধরে নিন: ১ ডলার = ১১০ টাকা)
 */

function convertUsdToBdt(usd) {
  return `${usd} USD = ${usd * 110} BDT`;
}

const usdValue = 4;
const bdtValue = convertUsdToBdt(usdValue);
console.log(bdtValue);
