// Write a function to count the number of vowels in a string.

function countVowel(str) {
  const lowerStr = str.toLowerCase();
  let count = 0;

  for (const char of lowerStr) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}

const input = "ownist";
const output = countVowel(input);
console.log(output);
