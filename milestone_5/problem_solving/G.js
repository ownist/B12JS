// একটি সংখ্যা জোড় (Even) নাকি বিজোড় (Odd), সেটি বের করার লজিক লেখো।

function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  }

  return "odd";
}

const input = 256;
const output = checkEvenOrOdd(input);
console.log(output);
