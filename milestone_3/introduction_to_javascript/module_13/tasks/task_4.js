/**
 * এই টাস্কে বলা হয়েছে—
দুটি আলাদা JavaScript লাইনের ফলাফল কী হবে,
এবং কেন এমন ফলাফল হবে সেটা ভাষায় বুঝিয়ে বলতে হবে।
এখানে কোনো কোড লিখতে বলা হয়নি,
শুধু ফলাফল আর তার কারণ ব্যাখ্যা করতে বলা হয়েছে।
 */

var a = isNaN("11");
console.log(a);
// eitar folafol 'false' hobe.. cz eikhane `isNaN` diye check kora hocche value ta ki number na?? but value ta to asole ekta number. ei karone eita false hobe

var b = isNaN(2 - 10);
console.log(b);
// eitar value o false hobe.. cz eikhanew isNaN diye check kora hocche je value ta ki number na?? but eikhanew er value ta actually number type er. ei karone eikhanew false hobe.
