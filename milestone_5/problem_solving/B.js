// একটি অ্যারে (Array) থেকে সবচেয়ে বড় সংখ্যাটি খুঁজে বের করার একটি প্রোগ্রাম লেখো।

function findLargestnumber(arr) {
  let largestNumber = arr[0];

  for (const num of arr) {
    if (num > largestNumber) {
      largestNumber = num;
    }
  }

  return largestNumber;
}

const input = [10, 51, 23, 48, 65, 45];
const output = findLargestnumber(input);
console.log(output);
