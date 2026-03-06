const address = "andorKillah";
// js slice
const part = address.slice(2, 5);
console.log(part);

// js split
const sentence = "I am a good and hardworking person";
console.log(sentence.split()); // splite
console.log(sentence.split(""));
console.log(sentence.split(" "));

console.log(sentence.split("a"));

// break
console.log("---------- break -------------");

const friendsStr = "Rahim,Sahim,Rahim,Dahim,Sahim";
const friends = friendsStr.split(",");
console.log(friends);
