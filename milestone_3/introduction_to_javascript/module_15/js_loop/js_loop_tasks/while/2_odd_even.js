/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// odd number
let i = 61;
while (i <= 100) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
}

console.log("- break --");

// even number
let n = 78;
while (n <= 98) {
  if (n % 2 === 0) {
    console.log(n);
  }
  n++;
}
