/**
 * পিরামিড প্যাটার্ন (Hard)
 *
 * nested loop (লুপের ভেতর লুপ) ব্যবহার করে কনসোলে নিচের প্যাটার্নটি তৈরি করুন (৫ লাইনের):
 */

/*
 *
 **
 ***
 ****
 *****
 */

//  by using for loop
for (let i = 1; i <= 5; i++) {
  let star = "";

  for (let j = 1; j <= i; j++) {
    star += "*";
  }

  console.log(star);
}

// by using while loop
let n = 1;
while (n <= 5) {
  let star = "";

  let num = 1;
  while (num <= n) {
    star += "*";
    num++;
  }
  console.log(star);
  n++;
}
