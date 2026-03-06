let fileName = "result.pdf";
let grabFileName = fileName.toLowerCase();

if (grabFileName.startsWith("#")) {
  console.log("Store");
} else if (grabFileName.endsWith(".pdf")) {
  console.log("Store");
} else if (grabFileName.endsWith(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}

/**
 * using shortcut
 */
if (
  grabFileName.startsWith("#") ||
  grabFileName.endsWith(".pdf") ||
  grabFileName.endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}
