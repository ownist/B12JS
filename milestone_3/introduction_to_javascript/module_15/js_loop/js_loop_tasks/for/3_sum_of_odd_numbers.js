/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

// sum of odd numbers
let oddSum = 0;
for (let odd = 91; odd <= 129; odd++) {
  if (odd % 2 !== 0) {
    console.log(odd);
    oddSum += odd;
  }
}
// total sum of odd numbers
console.log(`sum of odd numbers are: ${oddSum}`);

// duita code er output alada bujnor jonno ei break ta use kora hoiche
console.log("----- break ---------");

// sum of even numbers
let evenSum = 0;
for (let even = 51; even <= 85; even++) {
  if (even % 2 !== 1) {
    console.log(even);
    evenSum += even;
  }
}
// total sum of even numbers
console.log(`sum of even numbers are: ${evenSum}`);
