let str = "Capitalize Every first Letter of each word in a String";

let words = str.split(" ");

let completeStr = [];

for (const word of words) {
  let firstLetterEachWord = word[0].toUpperCase();
  let sliceWords = word.slice(1);

  let fullWord = firstLetterEachWord + sliceWords;
  completeStr.push(fullWord);
}
console.log(completeStr.join(' '));
