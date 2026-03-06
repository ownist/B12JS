/**
 * একটি অ্যারেতে এলোমেলো কিছু সংখ্যা নিন (যেমন: [5, 12, 8, 20, 3])। কোনো Math.max বা ES6 ফিচার ব্যবহার না করে, একটি for লুপ এবং if কন্ডিশন ব্যবহার করে খুঁজে বের করুন এই অ্যারের মধ্যে সবচেয়ে বড় সংখ্যা কোনটি।
 */

const nums = [5, 12, 8, 20, 233];
let bigNumber = 0;

for (const num of nums) {
  if (num >= bigNumber) {
    bigNumber = num;
  }
}
console.log(bigNumber);
