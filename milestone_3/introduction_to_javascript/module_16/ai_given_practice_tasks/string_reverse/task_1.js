/**
 * এটাকে reverse করো → "olleh"
 */

let str = "hello";
let rev = "";

for (let revStr of str) {
  rev = revStr + rev;
  // console.log(rev);
}

console.log(rev);
