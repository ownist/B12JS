let productDescription =
  "New arrival cotton t-shirt on SALE — limited edition release.";
let details = productDescription.toLowerCase();

if (details.includes("cotton")) {
  console.log("Material: Cotton");
} else if (details.includes("sale")) {
  console.log("Category: Sale Item");
} else if (details.includes("new arrival")) {
  console.log("Status: New Arrival");
} else if (details.includes("limited edition")) {
  console.log("Availability: Limited");
} else {
  console.log("Tag: General");
}
