function countingTheSpecificChr(sentence, chr) {
  const mathcedChr = [];

  for (const letter of sentence) {
    if (letter.toLowerCase() === chr.toLowerCase()) {
      mathcedChr.push(letter);
    }
  }
  return mathcedChr.length;
}
console.log(countingTheSpecificChr("Hello World", "o"));
