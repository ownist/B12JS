/**
 * একটি ই-কমার্স প্রোডাক্টের অবজেক্ট আছে (নাম, দাম, ডেসক্রিপশন, স্টক)। কোনো কারণে প্রোডাক্টের 'ডেসক্রিপশন' প্রপার্টিটি আর দরকার নেই। অবজেক্ট থেকে ওই প্রপার্টিটি পুরোপুরি মুছে ফেলুন।
 */

const product = {
  name: "T-Shirt",
  price: 350,
  description:
    "This is a Old-Money T-Shirt, and this shirt is very comfortable",
  stock: 5,
};

// delete prop
delete product.description;
console.log(product);
