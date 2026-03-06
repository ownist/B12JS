/**
 * একজন ব্যবহারকারীর প্রোফাইল অবজেক্ট তৈরি করুন (নাম, বয়স, পেশা)। হঠাৎ ব্যবহারকারী তার পেশা পরিবর্তন করেছেন। কোড লিখে অবজেক্টের ভেতরের পেশাটি আপডেট করুন এবং পুরো অবজেক্টটি প্রিন্ট করে দেখান।
 */

const user = {
  name: "Shahed",
  age: 17,
  designation: "Web Developer",
};

// update designation
user.designation = "ML Engineere";
console.log(user);
