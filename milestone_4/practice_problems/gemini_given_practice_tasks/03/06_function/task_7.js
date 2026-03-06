/**
 * ৭. বেসিক ইমেইল ভ্যালিডেশন (Simple Email Check)
 *
 * একটি ফাংশন তৈরি করুন যা একটি স্ট্রিং ইনপুট নেবে। যদি স্ট্রিংটির মধ্যে '@' চিহ্ন এবং '.' (ডট) থাকে, তবে ফাংশনটি true রিটার্ন করবে, অন্যথায় false রিটার্ন করবে।
 */

function checkEmail(email) {
  if (email.toLowerCase().includes("@") && email.toLowerCase().includes(".")) {
    return "valid email";
  } else {
    return "invalid email";
  }
}

const email = "comradeh27@gmail.com";
const result = checkEmail(email);
console.log(result);
