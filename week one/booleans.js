// comparison operators
//> Greater than
// This operator checks if one value is greater than another.
conole.log(8>5);

//<Les than
//This one checks if one value is lesser than another
console.log(7<2);

//>=Greater than or equal to
console.log (10>=10);

//<=Less than or equal to
console.log(5<=5);

//==Equal to
console.log(3==3);
console.log("5"==5); // comparing the string "5"and 5 remains true simply because the equal operator only checks the data and not the data type.
console.log(6==5);

//!==Equal to
console.log(5==5);
console.log("5"==5); // comparing the string "5"and 5 remains true simply because the equal operator only checks the data and not the data type.
console.log(6==5);

//!=Not equal to
// it does the opposite of  what equal to does therefore it checks if two values are not equal to each other.
console.log(5!=5);//5 isnot equal to 5
console.log(6!=5);//6 is not equal to 5

//===Strict equal to
//compaires two values and data types 
//it checksthe data type and data while making the comparison.
console.log("5"===5);//its false because it checks both the data and the data type  while making the comparison of 5 but one is astring and the another a number.
console.log(5===5);//its true because both the data and the data type are the same.

//Payments//
const paymentStatus="pending";
if (paymentStatus==="paid"){
    console.log("Thank you for your payment");
} 
else{
    console.log("Please make your payment");
}

//!==Strict not equal to
// consinders the string and the number equal even if they have the same data.
//consinders the datatype while making the comparison.
console,log("5"!==5); //string 5 is not equal to number 5


//Logical operators
//&& and operator
//This returns true if both conditions are true.
const isLoggedIn = true;
const isAdmin = false;
if (isLoggedIn && isAdmin) {
    console.log("Welcome, Admin!");
}
else {
    console.log("Access denied. You must be an admin to proceed.");
}

//|| OR Operator:This is remains true if one of the expressions is true even though one is false.
const width=20;
const height=5.6;
let result=width>=20 || height<5;
console.log(result); // true because width is greater than or equal to 20

//! Not operator
constMeasurement=height<6;
console.log(!result);

//Stock//
const stock = 10; // Example stock value
if (stock>0) {
    console.log("Item is in stock.");
} 
else {
    console.log("Item is out of stock.");
}

//Transport fee
constDistanceKm=15;
const transportFee = 50; // Example transport fee
if (distanceKm <= 15) {
    console.log("Transport fee is " + transportFee + " for distances up to 15 km.");
} 
else {
    console.log("Transport fee is " + (transportFee + 20) + " for distances over 15 km.");
}


//using else if
if (distanceKm<10) {
    console.log("Free Transport");
}
else if(distanceKm<=15) {
       console.log("Free Transport");
}
else{
    transportFee=2*7000;
    console.log("Transport fee is: "+14000+"UGX");
}


