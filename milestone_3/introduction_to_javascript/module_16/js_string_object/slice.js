const address = "andorKilla";
const part = address.slice(2, 5);
console.log(part);

const sentence = "I am a good and hardworking person";

// kono string ba empty string dei nai.. just sudhu matro split funtion take call kore disi
console.log(sentence.split()); // eivabe dile full sentence ta kei ekta array er moddhe bosaiya dibe. mane ekta array baniye dibe

// eibar split ke call kore sudhu empty string dilam.. kono gap-gup dei nai
console.log(sentence.split("")); // sentence er proottek ta letter(even space soho) ke vag kore dibe.. and also prottekta letter ke array er ek ek-ta element/upadan hisebe nibe

// eibar split kore empty string diye ekta white space dilam.. tahole split kora ta meaningfull hobe
console.log(sentence.split(" ")); // eita prottekta word ke alada alada kore vag kore dibe
/**
 * eibar a diya vag kore dibe
 */
console.log(sentence.split("a"));

const cpWrite = "web - dev - js";
console.log(cpWrite.split("-"));

const friendsStr = "Rahim,Sahim,Dahim,Mahim,Kahim";
const friends = friendsStr.split(",");
console.log(friends);

const realFriends = ["Rahim", "Sahim", "Dahim", "Mahim", "Kahim"];
console.log(realFriends.join(" | "));
