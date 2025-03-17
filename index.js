// const interval = setInterval(() => console.log("I run every 1 sec"), 1000);
// console.log(interval);
// setTimeout(() => clearInterval(interval), 5000);

// for (var i = 0; i < 10; i++) {
//   // console.log(i)
//   setTimeout(() => console.log(i), 0);
// }

//classical Inheritance
// class Name {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Person extends Name {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
//   greet() {
//     console.log(`${this.name} is ${this.age} year old`);
//   }
// }

// const person1 = new Person("John", 30);
// person1.greet();
// console.log(person1);

// console.log("=======================");
// //Prototypeal inheritance
// function Persons(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const newPerson = new Persons("John", 22);
// console.log(newPerson);

// const object = {
//     name:"John",
//     age:22

// }

// const newPerson = Object.create({})

//currying
// function add(num) {
//   return function (x) {
//     return x + num;
//   };
// }

// function add(num) {
//   return function (...args) {
//     console.log(args, "Outer");
//     if (args) {
//       return function (...args) {
//         console.log(args, "this");
//       };
//     }
//   };
// }

// // function sum(args){
// //     console.log("args",args)
// // }

//corect
// function add(a) {
//   console.log(a);
//   return function (b) {
//     console.log(b);
//     return b ? add(a + b) : a;
//   };
// }

// console.log("The sum of two number is ", add(5)(12)(1)(10)());

// function add(a) {
//   console.log(a);
//   let sum = a;

//   function inner(b) {
//     console.log(b);
//     sum += b;
//     return inner;
//   }

//   inner.toString = function () {
//     console.log(sum);
//     return sum;
//   };

//   return inner;
// }

// console.log("The sum of two numbers is", +add(5)(12)(1)(10));

// function sum(n) {
//   let v = (x) => {
//     // console.log(n + x, "This is s");
//     return sum(n + x);
//   };
//   console.log(v.valueOf);
//   v.valueOf = () => n;
//   //   console.log("this", n);
//   return v;
// }

// console.log("The sum of two numbers is", +add(5)(12)(1)(10));

//classical inheritance
// class Name {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Person extends Name {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
//   }
// }

// const person1 = new Person("Aman", 22);
// person1.greet();

//prototyple inheritance
// const object = {
//   greet(city) {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age}. I live in ${city}`
//     );
//   },
// };

// const person2 = Object.create(object);
// person2.name = "Aman";
// person2.age = 22;
// person2.greet("Delhi"); // "Hello, my name is Aman and I am 22. I live in Delhi"

// // Fixing ager function to work as expected:
// person2.ager = function () {
//   console.log("this is a function");
// };

// console.log(person2);
// person2.ager();

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function () {
//   console.log(`Hello my name is ${this.name}`);
// };

// function Persondetail(name, age) {
//   Person.call(this, name);
//   this.age = age;
// }

// Persondetail.prototype = Object.create(Person.prototype);
// Persondetail.prototype.constructor = Persondetail;

// Persondetail.prototype.print = function () {
//   console.log(`Hello my name is ${this.name} and i am ${this.age} years old`);
// };

// const person1 = new Persondetail("Aman", 22);
// console.log(person1);
// person1.print();
// person1.greet();

// const animal = {
//   type: "Animal",
//   sound: "bark",
//   makeSound() {
//     console.log(this.sound);
//   },
// };

// const dog = Object.create(animal);
// dog.sound = "Woof";
// const cat = Object.create(animal);
// cat.sound = "Meow";
// dog.makeSound();
// cat.makeSound();

//----------------------------------   --- --- --  --  --  --  --  -
// currying

// function sum(n) {
//   console.log(n);
//   let v = (x) => {
//     console.log(n + x, n, x);
//     return sum(n + x);
//   };
//   v.valueOf = () => {
//     return n;
//   };
//   return v;
// }

// console.log("The sum of two numbers is", +sum(5)(12)(1)(10));

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hiii");
//   }, 10000);
// });
// myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// curring example

//-------------------CURRYING METHOD 1------------------
// function sum(a, b, c) {
//   return a + b + c;
// }

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (...next) {
//         return curried(...args, ...next);
//       };
//     }
//   };
// }

// const addSum = curry(sum);

// console.log(addSum(2)(3)(4));

//-------------------CURRYING METHOD 2------------------

// function add(num) {
//   let v = (num2) => {
//     return add(num + num2);
//   };
//   v.valueOf = () => {
//     return num;
//   };
//   return v;
// }
// console.log(+add(1)(2)(3)(4));

//--------------------Prototypal Inheritance
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.print = function () {
//   console.log(`this is  ${this.name}`);
// };

// function Dog(name, variety) {
//   Animal.call(this, name);
//   this.variety = variety;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//   console.log(`${this.name} is a dog and loudly ${this.variety}`);
// };

// const dog1 = new Dog("Sheruu", "German Sheperd");
// // console.log(dog1);
// dog1.print();
// dog1.bark();

// function sum(a, b, c) {
//   return a + b + c;
// }

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (...next) {
//         return curried(...args, ...next);
//       };
//     }
//   };
// }

// const addSum = curry(sum);

// console.log(addSum(2)(3)(4));

// function add(num) {
//   debugger;

//   let v = (num2) => {
//     return add(num + num2);
//   };
//   v.valueOf = () => {
//     return num;
//   };
//   return v;
// }
// console.log(+add(1)(2)(3)(4)(2));

//second
// function add(a) {
//   return function (b) {
//     return b ? add(a + b) : a;
//   };
// }

// console.log(add(2)(3)(4)(4)());

//bind methods
// const object = {
//   name: "John",
//   print: function () {
//     setTimeout(() => console.log(`${this.name}`), 3000);
//   },
// };

// const object2 = {
//   name: "Smith",
// // };

// // const calling = object.print.bind(object2);
// // console.log("the method call ", calling());

// const person = {
//   print: function (city, country) {
//     console.log(`${this.name} live in ${city}, ${country}`);
//   },
// };
// const person1 = {
//   name: "john",
// };

// // call metho
// person.print.call(person1, "Delhi", "India");

// // apply method
// person.print.apply(person1, ["Delhi"], ["India"]);

// // bind method
// const calling = person.print.bind(person1, ["Delhi", "India"]);

// console.log("this");
// console.log("this");
// console.log("this");
// console.log("this");
// calling();

// const person = {
//   print: function (city, country) {
//     setTimeout(
//       () => console.log(`${this.name} live in ${city}, ${country}`),
//       1000
//     );
//   },
// };
// const person1 = {
//   name: "john",
// };

// // // call metho
// // person.print.call(person1, "Delhi", "India");

// // // apply method
// // person.print.apply(person1, ["Delhi", "India"]);

// // // bind method
// // const calling = person.print.bind(person1, "Delhi", "India");

// // console.log("this");
// // console.log("this");
// // console.log("this");
// // console.log("this");
// // calling();

// useEffect(() => {
//   console.log("Render");
//   return function () {
//     console.log("umount");
//   };
// }, [count]);

// const person = {
//   print: function (city, country) {
//     return function () {
//       console.log(`${this.name} live in ${city}, ${country}`);
//     };
//   },
// };
// const person1 = {
//   name: "john",
// };

// // call metho
// person.print.call(person1, "Delhi", "India");

// // apply method
// person.print.apply(person1, ["Delhi", "India"]);

// // bind method
// const calling = person.print.bind(person1, "Delhi", "India");

// console.log("this");
// console.log("this");
// console.log("this");
// console.log("this");
// calling();

// const person = {
//   print: function () {
//     setTimeout(() => console.log(`${this.name}`), 3000);
//   },
// };

// const person1 = {
//   name: "Aman",
// };

// person.print.bind(person1);

// function add(num) {
//   //   debugger;

//   let v = (num2) => {
//     return add(num + num2);
//   };
//   v.valueOf = () => {
//     return num;
//   };
//   return v;
// }
// console.log(+add(1)(2)(3)(4)(2));

//==========================================MEMOIZATION====================
//memoization using fibonachi

// function fibbo() {
//   const cache = {};
//   function fibbona(n) {
//     if (n in cache) {
//       return cache[n];
//     }
//     if (n <= 1) {
//       cache[n] = n;
//     } else {
//       cache[n] = fibbona(n - 1) + fibbona(n - 2);
//     }
//     return cache[n];
//   }
//   return fibbona;
// }

// const fib = fibbo();
// console.log("data", fib(4));

// // memoization in factorial

// function factmemo() {
//   const cache = {};
//   function fact(n) {
//     if (n in cache) {
//       return cache[n];
//     }
//     if (n <= 1) {
//       cache[n] = 1;
//     } else {
//       cache[n] = n * fact(n - 1);
//     }
//     return cache[n];
//   }
//   return fact;
// }

// const facto = factmemo();
// console.log("factorial", facto(5));

// let data = (function () {
//   let a = 10;
//   console.log("this", a);
//   return function(){
//     return a;
//   }
// })();

// function memoization() {
//   let cache = {};
//   function factorial(n) {
//     if (n in cache) {
//       return cache[n];
//     }
//     if (n <= 1) {
//       cache[n] = 1;
//     } else {
//       cache[n] = n * factorial(n - 1);
//     }

//     return cache[n];
//   }
//   return factorial;
// }

// const data = memoization();
// console.log("Factorial of 5 is ", data(5));

// setTimeout(() => console.log("hii 1"), 0);

// setTimeout(() => console.log("hii 2"), 0);
// for (let i = 0; i < 100; i++) {}
// console.log("This is executed before setTimeout");

// const timer = setTimeout(() => {
//   console.log("hello");
// }, 1000);

// console.log(timer);

// var a;
// console.log(a);
// a = 10;

// console.log(a);

// "use strict";
// console.log(010 + "23");

// console.log(4.33 + 2.4423);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.greet = function () {
//     //   console.log(`${this.name},${this.age}`);
//     //   console.log(`${name},${age}`);
//     // };
//   }
//   greet = function () {
//     console.log(`${this.name},${this.age}`);
//     // console.log(`${name},${age}`);
//   };
// }

// const name = new Person("Mohan", 22);
// name.greet();
