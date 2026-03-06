/**
 * ৪. ভ্যালিড কন্টাক্ট ফিল্টার (Filter Valid Contacts)
 *
 * আপনার ফোনে অনেকগুলো কন্টাক্ট (Array of Objects) সেভ করা আছে। প্রতিটি অবজেক্টে name এবং phone নম্বর আছে। কিন্তু কিছু কন্টাক্টে ফোন নম্বর দেওয়া নেই (ফাঁকা স্ট্রিং "" বা null)।
 *
 * একটি ফাংশন লিখুন যা কন্টাক্ট লিস্টটি ইনপুট নেবে।
 * যেসব কন্টাক্টে ভ্যালিড ফোন নম্বর আছে, শুধুমাত্র তাদের নিয়ে একটি নতুন অ্যারে তৈরি করবে এবং রিটার্ন করবে। যাদের নম্বর নেই তাদের বাদ দিতে হবে।
 */

const contacts = [
  {
    name: "shahed",
    phone: 1946543882,
  },
  {
    name: "sabbir",
    phone: 1726485123,
  },
  {
    name: "bishwas",
    phone: "",
  },
  {
    name: "siam",
    phone: null,
  },
  {
    name: "lahid",
    phone: "",
  },
  {
    name: "niloy",
    phone: 1965347899,
  },
];

function filterValidContacts(contactList) {
  const validPerson = [];

  for (const contact of contactList) {
    if (contact.phone) {
      validPerson.push(contact);
    }
  }
  // return valid person
  return validPerson;
}

const contactListValue = contacts;
const validContact = filterValidContacts(contactListValue);
console.log(validContact);
