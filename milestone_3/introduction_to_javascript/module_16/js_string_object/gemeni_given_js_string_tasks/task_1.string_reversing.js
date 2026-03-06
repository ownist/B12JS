/**
 * Task-1: String Reversing
 *
 * একটি স্ট্রিং দেওয়া থাকবে, আপনাকে সেই স্ট্রিংটির অক্ষরগুলোকে উল্টো (reverse) করে দেখাতে হবে।
 */

let str = "programming";
let reverseStr = "";

for (let i = 0; i < str.length; i++) {
  // prottekbar loop theke pawa string er letter
  let strLetterFromLoop = str[i];

  // reversStr er value set korchi
  reverseStr = strLetterFromLoop + reverseStr;
}
console.log(`Reverse "${str}" = ${reverseStr}`);
