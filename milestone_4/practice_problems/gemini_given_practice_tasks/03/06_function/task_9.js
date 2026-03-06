/**
 * ৯. প্যালিনড্রোম চেকার (Palindrome Checker)
 *
 * একটি ফাংশন লিখুন যা একটি শব্দ ইনপুট নেবে। শব্দটি উল্টো করে পড়লেও যদি একই থাকে (যেমন: "madam" বা "level"), তবে ফাংশনটি true রিটার্ন করবে, না হলে false রিটার্ন করবে।
 */

function checkPalindrome(word) {
  const palinWord = word.split("").reverse().join("").toLowerCase();

  if (word.toLowerCase() === palinWord) {
    return true;
  } else {
    return false;
  }
}

const myWord = "LEvEl";
const result = checkPalindrome(myWord);
console.log(result);
