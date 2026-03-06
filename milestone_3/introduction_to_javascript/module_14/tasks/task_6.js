/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrice = 800;
let age = 12;
let isStudent = false;

if (age <= 10) {
  ticketPrice = 0;
  console.log(`ticket will be free: ${ticketPrice}tk`);
} else if (age >= 60) {
  // 15% discount
  let discount = (ticketPrice * 15) / 100;
  let payAmmount = ticketPrice - discount;
  console.log(`please pay: ${payAmmount}tk`);
} else if (isStudent) {
  // 50% discount
  let discount = (ticketPrice * 50) / 100;
  let payAmmount = ticketPrice - discount;
  console.log(`plz pay: ${payAmmount}tk`);
} else {
  console.log(`pay full fare: ${ticketPrice}`);
}
