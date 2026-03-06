// multi level condition
const price = 2000;

// discount price
if (price >= 5000) {
  console.log("--------------------");
  console.log("apni discount peyechen");
  console.log(`ei productir full price holo: ${price}tk.`);

  // 10% discount
  const discount = (price * 10) / 100;
  console.log(`apner discount price holo: ${discount}tk.`);
  console.log("--------------------");

  // pay ammount
  const payAmmount = price - discount;
  console.log(`tahole apner total bill holo: ${payAmmount}tk.`);
} else if (price >= 2500) {
  // 5% discount
  const discount = (price * 5) / 100;
  const payAmmount = price - discount;
  console.log(payAmmount);
} else {
  console.log("apni kono discount panni");
  console.log("-------------------");
  console.log(`apner total bill: ${price}tk.`);
}
