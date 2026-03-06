/**
 * একটি স্ট্রিংয়ের মধ্যে ছোট হাতের 'a' এবং বড় হাতের 'A'—এই দুটি অক্ষর মোট কতবার আছে, তা আপনাকে গণনা করতে হবে
 *
 * অর্থাৎ, স্ট্রিংটিতে 'a' এবং 'A' উভয়ের সম্মিলিত সংখ্যা কত, সেটি বের করতে হবে।
 */

let myStr =
  "An apple a day keeps the doctor away. Always remember to stay active.";

let lowerCaseA = []; // ei array te choto hater "a" dhukbe
let upperCaseA = []; // ei array te boro hater "A" dhukbe

// lopp kore string er protiti letter alada kora hocche
for (let i = 0; i < myStr.length; i++) {
  // protibar lopp er somoi protita single letter singleLetter er moddhe store hocche
  let singleLetter = myStr[i];

  // then check kora hocche
  if (singleLetter === "a") {
    /**
     * jodi choto hater a ke pai tahole lowerCaseA er modde push kore dicche
     */
    lowerCaseA.push(singleLetter);
  } else if (singleLetter === "A") {
    /**
     * ar jodi boro hater A ke pai tahole upperCaseA er moddhe push kore dicche
     */
    upperCaseA.push(singleLetter);
  }
}
console.log(
  `"A" ache ${upperCaseA.length} ta and "a" ache ${
    lowerCaseA.length
  } ta. Therefor total: ${upperCaseA.length + lowerCaseA.length} ta.`
);
