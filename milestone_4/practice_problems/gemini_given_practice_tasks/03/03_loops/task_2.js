/**
 * লুপ ব্যবহার করে ১ থেকে ৫০ এর মধ্যে যতগুলো বিজোড় সংখ্যা (Odd numbers) আছে, তাদের সমষ্টি (Sum) বের করুন এবং ফলাফল কনসোলে দেখান।
 */

// by using for loop
let sum = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}
console.log(`total sum of odd numbers are: ${sum}`);

// by using whilw loop
let n = 1;
let total = 0;

while (n <= 50) {
  if (n % 2 !== 0) {
    total += n;
  }
  n++;
}
console.log(`total sum of odd numbers are: ${total}`);
