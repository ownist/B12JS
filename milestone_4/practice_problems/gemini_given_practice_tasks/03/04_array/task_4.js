/**
 * একটি অ্যারে নিন। unshift ব্যবহার করে অ্যারের একদম শুরুতে একটি নাম যোগ করুন। এরপর shift ব্যবহার করে অ্যারের প্রথম উপাদানটি ডিলিট করে দিন।
 */

const friends = ["shahed", "siam", "sabbir", "niloy", "lahid"];
friends.unshift("ronaldo");
friends.shift();
console.log(friends);
