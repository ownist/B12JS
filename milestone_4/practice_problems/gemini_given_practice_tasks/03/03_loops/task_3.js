/**
 * একটি ফলের নামের অ্যারে তৈরি করুন (কমপক্ষে ৫টি নাম থাকবে)। সাধারণ for লুপ ব্যবহার করে অ্যারেটির শেষ উপাদান (element) থেকে শুরু করে প্রথম উপাদান পর্যন্ত উল্টো অর্ডারে প্রিন্ট করুন।
 *
 * (Array method যেমন reverse() ব্যবহার করা যাবে না)।
 */

// by using for loop
const fruits = ["am", "jam", "lichu", "kola", "kathal"];

let revArrFruits = [];
for (let i = 0; i < fruits.length; i++) {
  revArrFruits.unshift(fruits[i]);
}
console.log(revArrFruits);

// by using while loop
let n = 0;
let whileRevArr = [];
while (n < fruits.length) {
  whileRevArr.unshift(fruits[n]);
  n++;
}
console.log(whileRevArr);

// ulta poddhoti by using for loop
let ultaArrUsingFor = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  ultaArrUsingFor.push(fruits[i]);
}
console.log(ultaArrUsingFor);

// ulta poddhoti by using while loop
let index = fruits.length - 1;
let newArr = [];

while (index >= 0) {
  newArr.push(fruits[index]);
  index--;
}
console.log(newArr);

// shortcut poddhoti by using array method. this called reversed() method
const result = fruits.reverse();
console.log(result);
console.log(fruits, "main array");
