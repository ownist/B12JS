const age = 47;
const price = 500;

if (age <= 12) {
  // free te khaite parbo
  console.log("you can eat for free");
} else if (age >= 60) {
  // 50% discount paibo
  const discount = (price * 50) / 100;
  const payAmmount = price - discount;
  console.log(payAmmount);
} else if (age >= 50) {
  // 25% discount
  const discount = (price * 25) / 100;
  const payAmmount = price - discount;
  console.log(payAmmount);
} else if (age >= 40) {
  // 10% discount
  const discount = (price * 10) / 100;
  const payAmmount = price - discount;
  console.log(payAmmount);
} else {
  console.log(`no discount.. please pay: ${price}tk.`);
}
