/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// sum of odd numbers
let i = 81;
let sum = 0;
while (i <= 131) {
  if (i % 2 === 1) {
    console.log(i);
    sum += i;
  }
  i++;
}
console.log(`total sum of odd numbers are: ${sum}`);

// break (output er somoy sohoje bujar jonno je eitar pore arekta code exicute hocche)
console.log("----- break ----");

// sum of even numbers
let n = 206;
let total = 0;
while (n <= 311) {
  if (n % 2 === 0) {
    console.log(n);
    // sum
    total += n;
  }
  n++;
}
console.log(`total sum of even numbers are: ${total}`);
