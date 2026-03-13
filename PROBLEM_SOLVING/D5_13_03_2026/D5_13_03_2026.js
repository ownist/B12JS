function isPalindrome(str) {
  let palindromeStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    palindromeStr += str[i];
  }

  if (palindromeStr.toLowerCase() === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

const input = "madam";
const output = isPalindrome(input);
console.log(output);
