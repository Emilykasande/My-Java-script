//Age verification
const age = 20; // Example age
if (age >= 18) {
    console.log("You are eligible to vote.");
} 
else {
    console.log("You are not eligible to vote.");
}

//Temperature check
const temperature = 30; // Example temperature in degrees Celsius
if (temperature > 25) {
    console.log("It's a hot day.");
}
else {
    console.log("It's a cool day.");
}

//User authentication
const username = "user123"; // Example username 
const password = "pass123"; // Example password
if (username === "user123" && password === "pass123") {
    console.log("Login successful!");
}
else {
    console.log("Invalid username or password.");
}


//Weather condition
const weather = "sunny"; // Example weather condition
if (weather === "sunny") {
    console.log("It's a sunny day. Don't forget your sunglasses!");
}
else if (weather === "rainy") {
    console.log("It's raining. Take an umbrella!");
}
else {
    console.log("Weather condition is unknown.");
}

//Discount eligibility
const purchaseAmount = 150; // Example purchase amount
if (purchaseAmount >= 100) {
    console.log("You are eligible for a discount!");
}
else {
    console.log("No discount available for purchases under 100.");
}

//Membership status
const isMember = true; // Example membership status
if (isMember) {
    console.log("Welcome, valued member!");
}
else {
    console.log("Join our membership for exclusive benefits!");
}

//Event registration
const isRegistered = false; // Example registration status
if (isRegistered) {
    console.log("You are registered for the event.");
}
else {
    console.log("Please register for the event to attend.");
}

//Subscription status
const isSubscribed = true; // Example subscription status
if (isSubscribed) {
    console.log("Thank you for subscribing!");
}
else {
    console.log("Please subscribe to receive updates.");
}

//Feedback submission
const hasFeedback = true; // Example feedback status
if (hasFeedback) {
    console.log("Thank you for your feedback!");
}
else {
    console.log("Please provide your feedback.");
}

//Order status
const orderStatus = "shipped"; // Example order status
if (orderStatus === "shipped") {
    console.log("Your order has been shipped.");
}
else if (orderStatus === "delivered") {
    console.log("Your order has been delivered.");
}
else {
    console.log("Your order is being processed.");
}


//Login attempt
const loginAttempts = 3; // Example number of login attempts
if (loginAttempts < 5) {
    console.log("You have " + (5 - loginAttempts) + " attempts left.");
}
else {
    console.log("Your account is locked due to too many failed login attempts.");
}

//Password strength check
const password = "StrongPass123"; // Example password
if (password.length >= 8 && /[A-Z]/.test(password) && /
[a-z]/.test(password) && /\d/.test(password)) {
    console.log("Your password is strong.");
}
else {
    console.log("Your password is weak. Please include uppercase letters, lowercase letters, and numbers.");
} 

//Email validation
const email = "emilykasande1@gmail.com"; // Example email
if (email.includes("@") && email.includes(".")) {
    console.log("Email is valid.");
}
else {
    console.log("Email is invalid. Please enter a valid email address.");
}



