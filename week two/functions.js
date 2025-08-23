// function sayHello() {
//   console.log("Hello");
// }
// sayHello(); // <-'Hello'

function greet() {
  return greet;
}
console.log("Hello");
// function declaration

//function expression
const sayHello = function () {
  console.log("Hello");
};
// call the function
sayHello(); //output:Hello

//Anonymous functions
setTimeout(function () {
  console.log("Stock update successfully,");
}, 1000);

/*arrow function
displaying sales agent names*/
const showAgent = (AgentName) => {
  console.log("Sales Agent:", AgentName);
};
showAgent("Emily");

//function without parameters and Return
//logs report message:
function printSalesReportMessage() {
  console.log("Generating sales report");
}
printSalesReportMessage();

//Function Returning a value,
//Calculating total price of a sale:
function calculateTotal(quantity, price) {
  return quantity * price;
}
let total = calculateTotal(4, 14000);
console.log("Total:", total);

//function with parameters,
//creating a receipt:
function generateReceipt(customerName, product, quantity, price, paymentType) {
  console.log(`Receipt for ${customerName}:
  Product: ${product}
  Quantity: ${quantity}
  Total: ${quantity * price}
  Payment: ${paymentType}`);
}

generateReceipt("Emily", "Dining Table", 4, 200000, "cheque");

//Arrow Function with Unlimited Parameters,
//Listing products sold in one transaction:
const listProducts = (...products) => {
  console.log("Products sold:");
  products.forEach((product) => console.log(product));
};

listProducts("Drawer", "Chair", "Cupboard");

//Self-invoking function,
//used for initializing the app:
(function () {
  console.log("MWF System Initialized");
})();

//Scope Functions
//Understanding local vs global
let companyName = "MWF";
function showCompany() {
  let message = "Welcome to" + companyName;
  console.log(message);
}
showCompany();
//console.log(message);//Error is not defined (scope)
