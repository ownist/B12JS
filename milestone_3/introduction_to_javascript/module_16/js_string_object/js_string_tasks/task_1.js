/**
 * টাস্ক-১: একটি স্ট্রিংয়ের ভেতরে 'a' অক্ষরটি মোট কতবার আছে, আপনাকে সেটি গণনা (count) করতে হবে।
 */

let str = "I am a student of programming hero";

// string er modde joita a ache sobguloke array te dhukanor jonno ekta empty array declar korchi
let totalALetter = [];

for (let i = 0; i < str.length; i++) {
  // ekta ekta single letter er jonno variable
  let singleLetter = str[i];

  // jodi a letter pai taholei array te push korbe
  if (singleLetter === "a") {
    totalALetter.push(singleLetter);
  }
}
console.log(
  `Total "a" letter of "${str}" this string are: ${totalALetter.length}`
);
console.log(totalALetter);
