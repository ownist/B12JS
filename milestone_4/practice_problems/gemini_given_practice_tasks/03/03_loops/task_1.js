/**
 * যেকোনো একটি সংখ্যা (যেমন: ৫) নিন। for লুপ ব্যবহার করে সেই সংখ্যার ১ থেকে ১০ পর্যন্ত নামতা (Multiplication Table) কনসোলে প্রিন্ট করুন।
 *
 * (উদাহরণ: 5 x 1 = 5 ... এভাবে 5 x 10 = 50 পর্যন্ত)
 */

// by using for loop
let num = 11;

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

console.log("----------------- break --------------------"); // duita alada jinis eita bujhanor jonno

// by using while loop
let n = 1;
while (n <= 10) {
  console.log(`${num} x ${n} = ${num * n}`);
  n++;
}
