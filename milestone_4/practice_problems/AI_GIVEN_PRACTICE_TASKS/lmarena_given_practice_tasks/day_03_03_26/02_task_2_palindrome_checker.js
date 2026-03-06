/**
 * Task 2: প্যালিনড্রোম চেকার (Palindrome)
 *
 * একটি শব্দ নিন (যেমন: "madam" বা "racecar")। আপনাকে এমন একটি লজিক লিখতে হবে যা চেক করে বলবে শব্দটি উল্টে দিলেও একই থাকে কি না। যদি থাকে তবে এটি "True", আর না থাকলে "False" রিটার্ন করবে।
 */

const palindromeChecker = (str) => {
  const palindromeWord = str.split("").reverse().join("");

  if (str === palindromeWord) {
    console.log(true);
  } else {
    console.log(false);
  }
};

palindromeChecker("racecar");
