function calculateSleepTime(times) {
  // edge case: input ki asole array kina
  if (!Array.isArray(times)) return "Invalid";

  let totalSeconds = 0;

  // loop kore sobgulo second jog kora and check kora seigulo "number" type kina
  for (const s of times) {
    if (typeof s !== "number") return `${s}(${typeof s}) is Invalid`; // jodi kono element "number" na hoy
    totalSeconds += s;
  }

  // total seconds theke hour ber kora (3600 seconds = 1 hour)
  const hour = Math.floor(totalSeconds / 3600);

  // hour bad dewar por baki second theke minute ber kora (60 seconds = 1 minute)
  const remainingSecondsAfterHour = totalSeconds % 3600;
  const minute = Math.floor(remainingSecondsAfterHour / 60);

  // at the end sob-shesh e ja baki thake ta holo second
  const second = remainingSecondsAfterHour % 60;

  // then object akare return kora
  return {
    hour,
    minute,
    second,
  };
}

const input = [1000, 499, 519, 300];
const output = calculateSleepTime(input);
console.log(output);
