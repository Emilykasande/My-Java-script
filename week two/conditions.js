// Conditional statement Decision making

// Ask for age
let age = prompt("Please enter your age");
age = Number(age);

if (isNaN(age) || age < 0) {
  window.alert("Please enter a valid age");
} else {
  if (age >= 18) {
    window.alert("You are an adult. You can vote!");
  } else {
    window.alert("You are a minor and can't vote!");
  }
}

// Ask for payment type
let PaymentType = prompt(
  "Enter payment method: (Cash, Mobile money, Bank)"
).toLowerCase();

switch (PaymentType) {
  case "cash":
    alert("Pay directly at the counter");
    break;
  case "mobile money":
    console.log("Verify your phone details before delivering");
    break;
  case "bank":
    alert("Confirm before proceeding");
    break;
  default:
    alert("Unknown method, please check again");
}

// Product type check
let product = prompt("Enter product type: (wood or furniture)").toLowerCase();

switch (product) {
  case "wood":
    alert("Please store it in the warehouse!");
    break;
  case "furniture":
    alert("You can display it in the showroom");
    break;
  default:
    alert("Please enter a valid product type!");
}

// Number check
let number = Number(prompt("Enter a number:"));

switch (true) {
  case number > 0:
    alert("Number is positive");
    break;
  case number === 0:
    alert("Number is zero");
    break;
  case number < 0:
    alert("Number is negative");
    break;
  default:
    alert("Please enter a valid number!");
}

// Stock control
let stockCount = Number(
  prompt("Enter number of products (wood or furniture) that you want:")
);

switch (true) {
  case stockCount > 10:
    alert("Product in plenty");
    break;
  case stockCount > 0 && stockCount <= 10:
    alert("Limited stock available");
    break;
  case stockCount === 0:
    alert("Out of stock");
    break;
  default:
    alert("Please check again");
}
