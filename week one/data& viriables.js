/*
Data types
1. strings/Text
2. numbers
   - integers
   - big integers
   - decimals
3. boolean
   - true/false
4. undefined
5. null
6. symbol (for uniqueness)
*/

let productname = "timber"; // strings go in quotes
console.log(typeof(productname))
let productcost = 3500;
productcost=4000
let transportisneeded = true;
let tablecolor; // undefined
let discount = null;

console.log(productcost * 2); // outputs 7000

/*
Non-primitive Data Types (cannot be changed directly,without ressignment value)
1. Array - a list of items
   e.g. [2, 3, 4], ["sofa", "table"]
2. Object - a collection of key-value pairs
3. Date
4. Function
*/

let productlist = ["sofa", "table", "cupboard"];
console.log(productlist);

// Fixed and combined dining table object
let diningtableobject = {
  productname: "Dining table",
  quatity: 3,
  price: 350,
};

// Compute total cost after object creation
diningtableobject.totalcost =
  diningtableobject.quatity * diningtableobject.price;
console.log("Total cost of dining tables:", diningtableobject.totalcost);

let paymenttype = "cash";
const VAT = 0.05;
const PI = 3.14;
