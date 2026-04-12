const today = new Date();
console.log(today);

const date = new Date("2065-02-02");
console.log(date.getMonth());

const specificDate = new Date(2092, 0, 12);
console.log(specificDate);
specificDate.setMonth(11);
console.log(specificDate.toDateString());

const myDate = new Date();
console.log(myDate.toLocaleString());
