/**
 * Task-2: Palindrome Check
 *
 * একটি স্ট্রিং প্যালিনড্রোম (Palindrome) কি না তা আপনাকে পরীক্ষা করতে হবে।
 */

let str = "Madam";
let revStr = "";

for (let i = 0; i < str.length; i++) {
  let strLetterFromLoop = str[i];
  revStr = strLetterFromLoop + revStr;
}

// checking
if (str.toLocaleLowerCase() === revStr.toLocaleLowerCase()) {
  console.log(`Yes, it's a palindrome`);
} else {
  console.log(`No, it's not`);
}
