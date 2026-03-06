/**
 * Task-5: Find the Longest Word
 *
 * আপনাকে একটি স্ট্রিং দেওয়া হবে
 * আপনার কাজ হলো সেই স্ট্রিংটির ভেতরে সবচেয়ে বড় বা দীর্ঘতম শব্দটি (Longest Word) খুঁজে বের করা এবং সেটি আউটপুট হিসেবে দেখানো
 *
 * উদাহরণ: যদি ইনপুট হয় "Web development is amazing", তবে আউটপুট হবে "development" (কারণ এটি এখানে সবচেয়ে লম্বা শব্দ)।
 */

let str = "Success is not final failure is not fatal";
let bigWord = "";

let words = str.split(" ");
for (const word of words) {
  if (word.length > bigWord.length) {
    bigWord = word;
  }
}
console.log(bigWord);
