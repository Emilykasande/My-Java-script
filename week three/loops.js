// for loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// array loop
const products = ["wood", "furniture", "table", "chair", "sofa"];
for (let i = 0; i < products.length; i++) {
  console.log(`item ${i + 1}: ${products[i]}`);
}

// while loop
let stock = 20;
while (stock > 0) {
  console.log(`selling item -- stock left is ${stock}`);
  stock--;
}
let i=0;
do {
    console.log(i);
    i++;
} while (i <= 5);

// do-while loop
let order;
let totalstock = 1000;

do {
  order = parseInt(
    prompt(`Enter order (Available stock is ${totalstock}):`),
    // 10
  );

  while (order > totalstock) {
    alert("Insufficient stock, please reduce your order.");
    order = parseInt(
      prompt(`Enter order (Available stock is ${totalstock}):`),
    //  10 
    );
  }

  remainstock = totalstock- order;
  alert(`Order placed successfully! Remaining stock: ${remainstock}`);
} while (totalstock > 0);

console.log(`Selling completed -- stock left is ${totalstock}`);

//a buttonthat runs 

//   const itemSold= ["wood", "furniture", "table", "chair", "sofa"];
// for (const item of itemSold) {
//   console.log(`sold item: ${item}`);
// }

// const sale={
//   customer: "John Doe",
//   products:"chair",
//   quqtity:2,
//   price: 150

// }
// console.log(`Customer: ${sale.customer}, Product: ${sale.products}, Quantity: ${sale.quqtity}, Price: $${sale.price}`);

//     for(const key in sale) {
//       console.log(`${key}: ${sale[key]}`);


