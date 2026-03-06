let sentence = "I am learning Web Development.";

for (const letter of sentence) {
  console.log(letter);
}

console.log("------ break -------");

/**
 * amra jodi ekta sentence ke ultai te chai tahole nicher jinista mone rakhbo
 *
 * like: Web
 * Web ke loop korle amra age pabo ---> W ke
 * W
 * eW
 * beW
 *
 * like: donal
 * d
 * od
 * nod
 * anod
 * lanod
 */

/**
 * amra same jinistai kaje lagabo
 */
let reverse = "";
for (const letter of sentence) {
  reverse = letter + reverse;
}
console.log(reverse);

console.log("------ break -----");

/**
 * now try for loop
 */
let myName = "Shahed";
let rev = "";
for (let i = 0; i < myName.length; i++) {
  /**
   * console.log(`${i} index: ${myName[i]}`);
   */
  const letter = myName[i];
  rev = letter + rev;
}
console.log(rev);

console.log("------ break -----");

// shortcut solution
const reversedSentence = sentence.split('').reverse().join('');
console.log(reversedSentence);
