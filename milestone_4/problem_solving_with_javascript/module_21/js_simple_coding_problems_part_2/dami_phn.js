const mobiles = [
  { name: "iPhone", price: 100000 },
  { name: "xioami", price: 25000 },
  { name: "samsung", price: 300000 },
  { name: "honor", price: 15000 },
];

function getDamiPhn(phones) {
  let damiPhn = phones[0];

  for (const phn of phones) {
    if (phn.price > damiPhn.price) {
      damiPhn = phn;
    }
  }

  return damiPhn;
}

const result = getDamiPhn(mobiles);
console.log(result);
