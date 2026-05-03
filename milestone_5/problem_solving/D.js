// সেলসিয়াস তাপমাত্রাকে ফারেনহাইটে রূপান্তর করার একটি ফাংশন তৈরি করো।

function celTof(c) {
  return (c * 9) / 5 + 32;
}

const input = 45;
const output = celTof(input);
console.log(output);
