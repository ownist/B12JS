const mobiles = [
  { name: "iPhone", price: 100000 },
  { name: "xioami", price: 25000 },
  { name: "samsung", price: 20000 },
  { name: "honor", price: 15000 },
];

function findCheapestPhn(phns) {
  let cheapestPhone = phns[0];

  for (const phn of phns) {
    if (phn.price < cheapestPhone.price) {
      cheapestPhone = phn;
    }
  }

  return cheapestPhone;
}

const result = findCheapestPhn(mobiles);
console.log(result);
