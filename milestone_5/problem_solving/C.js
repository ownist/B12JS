// একটি স্ট্রিং 'Palindrome' কি না তা যাচাই করো। (Palindrome মানে হলো যা সামনে বা পেছন থেকে পড়লে একই থাকে, যেমন: "madam")।

function checkPalindrome(str) {
  return str === str.split("").reverse().join("");
}

const input = "madam";
const output = checkPalindrome(input);
console.log(output);
