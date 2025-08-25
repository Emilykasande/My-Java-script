// 4. ES6 Classes vs ES5 Constructor Functions

//JavaScript originally used constructor functions + prototypes to create objects.
//ES6 introduced class syntax to make it easier.

// ES5 Constructor Function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Add method via prototype
// Person.prototype.sayHello = function() {
//   console.log("Hi, I'm " + this.name);
// };

// let john = new Person("John", 30);
// john.sayHello(); // Hi, I'm John





// ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(Hi, I'm ${this.name});
  }
}


const person1 = new Person 

const createPerson = function(name, age){
return  {
  name, 
  age,
  sayHello() {
    console.log(Hi, I'm ${this.name});
  }

}
}






//  {
//   name, 
//   age,
//   sayHello() {
//     console.log(Hi, I'm ${this.name});
//   }

// }



// let jane = new Person("Jane", 28);
// jane.sayHello(); // Hi, I'm Jane

// Inheritance Example
ES5
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};

function Dog(name) {
  Animal.call(this, name); // call parent constructor
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(this.name + " barks.");
};

let d = new Dog("Rex");
d.speak(); // Rex barks





ES6
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(${this.name} makes a noise.);
  }
}

class Dog extends Animal {
  speak() {
    console.log(${this.name} barks.);
  }
}

let d = new Dog("Rex");
d.speak(); // Rex barks