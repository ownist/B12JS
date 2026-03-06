/**
 * desclimer
 *
 * ei jinista oneeeeeek advanced. ami ei bisoy e obogoto na. AI boleche eita na bujlew hobe
 */
const products = ["Laptop", "mobile", "Watch", "tablet", "Camera"];

products.sort(function (a, b) {
  if (a.toLocaleLowerCase() < b.toLowerCase()) return -1;
  if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) return 1;
  return 0;
});
console.log(products);
