// console.log("today i will learn javascript function");

// write a function
function hello() {
  console.log("i am a function");
}

hello(); // function ke call kortesi.

function moneyBag() {
  let moneyIHave = 4500;
  console.log(`I have ${moneyIHave} tk`);
}

moneyBag();

// jog korar machine
function jogKorarMaChine(input1, input2) {
  let sum = input1 + input2;
  console.log(`Sum is: ${sum}`);
  return sum; /** jodi function er vitore thaka kono jinsike amra function block er baire theke asscess krte chai tahole return use krte hoi. and return e bole dite hoi je kon jinista ke baire use korbo seita return krte hoi */
}

jogKorarMaChine(10, 20);
jogKorarMaChine(2154, 26584);

console.log("---------- break ----------");

let result = jogKorarMaChine(
  20,
  10,
); /** ei jogKorarMaChine ta ultimetly ekta output dicche and sei output ta ami ei result variable er moddhe store korchi. but jodi function e return kora thake tahole eita store hobe nahole hobe na */
console.log(result);
