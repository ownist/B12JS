/**
 * amra single vabe data rakhi.. ekta variable baniye
 */

// eigula primitive
const age = 17;
const college = "Govt. Graphic Arts Institute";
const isReferred = false;

// eita special jinis..
let isDeveloper; // value hobe unsdefined
console.log(isDeveloper);

/**
 * abr amra array shiksi. jeikhane multiple item/element rakha jai under a single variable
 */
const subjects = ["Physics", "English", "Bengali", "Math", "Baisc Electricity"];

/**
 * object hocche non-primitive data type
 *
 * ekta object declear kori
 *
 * object e duita jinis thake: key/property and value
 */
const bottle = {
  brand: "icy",
  price: 120,
  color: "sky blue",
  isClean: false,
  isFreshWater: false,
};

const subject = {
  name: "English-1",
  teacherName: "Israt Jahan Habiba",
  examDate: "16 Jan 2026",

  /**
   * object er value jekono ichu hote pare. array, string, boolean even object er value ekta object o hote pare
   */
  chapters: ["first", "second", "third"],

  // object er value arekta object
  exams: {
    name: "Diploma in Engineering",
    marks: 100,
  },
};
console.log(subject);
