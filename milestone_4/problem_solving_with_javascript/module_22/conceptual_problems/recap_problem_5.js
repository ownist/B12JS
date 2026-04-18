const calculateSleepTime = (times) => {
  // check kora hocche array kina
  if (!Array.isArray(times)) return "Invalid";

  let totalSeconds = 0;

  // loop kore total second jog kora hocche and also check kora hocche jei element gulo pacchi seigulo number type er kina
  for (const n of times) {
    if (typeof n !== "number") return "Invalid";
    totalSeconds += n;
  }

  // total seconds theke ghonta ber kortesi
  const hour = Math.floor(totalSeconds / 3600); // 3600 seconds = 1hr

  // ghonta bad dewar por baki second theke minute ber kora
  const remainingSecondsAfterHour = totalSeconds % 3600;
  const minute = Math.floor(remainingSecondsAfterHour / 60); // 60 second = 1 minute

  // last e esecond ber kora
  const second = Math.floor(remainingSecondsAfterHour % 60);

  // object akare return kora
  return { hour, minute, second };
};

const input = [1000, 499, 519, 300, 5000];
const output = calculateSleepTime(input);
console.log(output);
