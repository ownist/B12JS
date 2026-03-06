const college = {
  name: "Govt. Graphic Arts Institute",
  class: [
    "1st Semester",
    "2nd Second Semester",
    "4th Semester",
    "6th Semester",
  ],
  events: ["Science Fair", "Bijoy Dibosh", "Independents Day"],
  unique: {
    color: "Sky Blue",
    result: {
      gpa: 5,
      merit: "Top Most",
    },
  },
};

console.log(college.unique.color);
console.log(college["unique"]["color"]);

// result
console.log(college.unique.result.gpa);

// merit er value take change korte chai
college.unique.result.merit = "Verry Lowest";
console.log(college);

// events er bijoy dibosh ke 16 dec krte chai
college.events[1] = "Dec 16";
console.log(college);

// break
console.log("----------- break ---------");

// delete a property
console.log(college);

delete college.class;

console.log("------- after deleting class property ---------");

console.log(college);
