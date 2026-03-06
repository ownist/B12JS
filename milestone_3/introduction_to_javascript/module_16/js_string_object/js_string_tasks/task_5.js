/**
 * একটি স্ট্রিংয়ের ভেতরে যতগুলো শব্দ (word) আছে, প্রতিটি শব্দের প্রথম অক্ষরটিকে বড় হাতের (Capitalize) করতে হবে। বাকি অক্ষরগুলো যেভাবে আছে সেভাবেই থাকবে।
 *
 * সহজভাবে বললে, যদি স্ট্রিংটি হয় "hello world", তবে সেটিকে পরিবর্তন করে করতে হবে "Hello World"।
 */

let str = "js string tasks are fun and easy to solve. Capitalize Every first Letter of each word in a String";

let words = str.split(" ");
// console.log(sepWordStr);
let capitalizeEveryFirstLeterWord = [];

for (const word of words) {
  let firstLetter = word[0].toUpperCase();
  let fullWord = firstLetter + word.slice(1);
  capitalizeEveryFirstLeterWord.push(fullWord);
}
console.log(capitalizeEveryFirstLeterWord.join(' '));
