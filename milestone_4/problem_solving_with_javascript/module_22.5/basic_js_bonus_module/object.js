const nayok = {
  id: 121,
  name: "Sakib Khan",
  address: "movie - cinema",
  isSingle: true,
  friends: ["apu", "raz", "salman", "totini"],
  movies: [
    { name: "no. 1", year: 2015 },
    { name: "khan", year: 2000 },
  ],
  act: function () {
    console.log("acting like cristiano ronaldo");
  },
  car: {
    brand: "lambo",
    price: 50000000,
    made: 2005,
    manufacturer: {
      name: "tesla",
      ceo: "elon musk",
      country: "USA",
    },
  },
};

// console.log(nayok.act());
nayok.act();
