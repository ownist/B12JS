/**
 * js slice() method
 */
const str = "Apple, Banana, Kiwi";

// most common
// let sliceStr = str.slice(7, 13);

// using negative value
let sliceStr = str.slice(-19, -14);
console.log(sliceStr);

// using substringmethod()
console.log(str.substring(0, 5));

// substr()
console.log(str.substr(15, 2));

/**
 * now it's time is replace() method
 */
let iLoveMyGf = "I love Janina";
console.log(iLoveMyGf);
// change gf name using replace() method
let newGfName = iLoveMyGf.replace("Janina", "you Bbz");
console.log(newGfName);

// replace one
const sentence = "I love Sakhina & Sakhina. Sakhina is a beautiful girl";
const repSentence = sentence.replace("Sakhina", "Zorina");
console.log(repSentence);
