// একটি ফাংশন লেখো যা কোনো স্ট্রিং ইনপুট নিলে সেটিকে উল্টো (Reverse) করে আউটপুট দেবে।

function reverse(str) {
  let string = "";

  for (const char of str) {
    string = char + string;
  }

  return string;
}

const input = "ownist";
const output = reverse(input);
console.log(output);
