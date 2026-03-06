/**
 * reverse করে output দেখাও
 */

let str = "JavaScript";
let revStr = "";

for (let i = 0; i < str.length; i++) {
  // prottekbar index onojayi value rev variable er moddhe set kora hocche
  let rev = str[i];

  // revStr er ager value er sathe notun value set kora hocche
  revStr = rev + revStr;
}
console.log(revStr);

/**
 * try different and shortcut method
 */
let result = str.split("").reverse().join("");
console.log(result);
