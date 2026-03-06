/**
 * ৪. রিভার্স স্ট্রিং (Reverse a String)
 *
 * একটি স্ট্রিং ভ্যারিয়েবল নাও (যেমন: let text = "hello")। এবার লুপ ব্যবহার করে স্ট্রিংটিকে উল্টো করে দেখাও। আউটপুট হবে: "olleh"।
 */

const str = "hello";
const revStr = [];

for (const letter of str) {
  revStr.unshift(letter);
}

console.log(revStr.join(""));
