// function add(num) {
//   num = num + 10;
//   console.log(num);
// }

// let a = 10;

// add(a);
// console.log(a);

// function person(obj) {
//   // obj = { name: "Aman" };
//   obj["name"] = "John cena";
//   console.log(obj);
// }

// const obj = { name: "Heroo" };

// person(obj);
// console.log(obj);

// const person = {
//   name: "Hero",
//   age: 22,
//   info: function () {
//     console.log(`${this.name} , ${this.age}`);
//   },
// };

// person.info();

// const personDetails = {
//   print: function (city, person) {
//     console.log(`${this.name} is from ${city}, ${person}`);
//   },
// };

// const person1 = {
//   name: "Hero",
// };

// //call
// personDetails.print.call(person1, "Delhi", "India");
// console.log("hoo");

// //apply
// personDetails.print.apply(person1, ["Delhi", "India"]);

// //bind
// const dataCall = personDetails.print.bind(person1, "Delhi", "India");
// console.log("kjsahdkljhsldak");
// console.log("kjsahdkljhsldak");
// console.log("kjsahdkljhsldak");
// console.log("kjsahdkljhsldak");
// console.log("kjsahdkljhsldak");

// dataCall();

//currying

// function add(a) {
//   //   console.log(a, "This is a");
//   return function (b) {
//     // console.log(a, b, "this is b");
//     return b ? add(a + b) : a;
//   };
// }
// console.log(add(2)(3)(4)(5)());

// const object = {
//   name: "Aman",
//   address: {
//     city: "Delhi",
//     lane: {
//       house: "123",
//     },
//   },
// };

//shallow
// const obj = { ...object };
// console.log(obj);
// obj.address.city = "Ul";
// obj.address.lane = "12345678 ";
// obj.name = "Hero";
// console.log(obj);
// console.log(object);

//Deep

// const obj = JSON.parse(JSON.stringify(object));
// obj.address.city = "Ul";
// obj.address.lane = "12345678 ";
// obj.name = "Hero";
// console.log(obj);
// console.log(object);
// console.log(obj);

/**
 * mounting => componentwillmount componentdidmount
 * update=> shouldComponentupdate componentwillUpdate componentDidMount
 * unmount=>componentwillunmount
 */
// useEffect(() => {
//   console.log("uodatemount");
//   return function () {
//     return hellop;
//   };
// }, [count]);

// let str = "";
// let n = 6;
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= n; j++) {
//     // console.log(j, Math.ceil(n / 2));
//     if (j == Math.ceil(n / 2) - i || j == Math.ceil(n / 2) + i) {
//       str += "*";
//     } else if (i == 3) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   str += "\n";
// }
// console.log(str);

// let n = 4;
// let str = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n + n - 1; j++) {
//     if (i == n || j == n - i + 1 || j == n + i - 1) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   str += "\n";
// }
// console.log(str);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const target = 8;
// let start = 0;
// let end = arr.length - 1;
// function binarySearch(arr, target, start, end) {
//   let mid = Math.floor((end + start) / 2);
//   // console.log("hoo", target, start, end, mid);
//   if (target < arr[mid]) {
//     end = mid - 1;
//     binarySearch(arr, target, start, end);
//   } else if (target > arr[mid]) {
//     start = mid + 1;
//     binarySearch(arr, target, start, end);
//   } else if (target === arr[mid]) {
//     // console.log("hii", arr[mid]);
//     return mid;
//   } else {
//     return -1;
//   }
// }
// let index = binarySearch(arr, target, start, end);
// console.log(index);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const target = 8;
// let start = 0;
// let end = arr.length - 1;

// function binarySearch(arr, target, start, end) {
//   if (start > end) {
//     return -1;
//   }

//   let mid = Math.floor((end + start) / 2);

//   if (target < arr[mid]) {
//     return binarySearch(arr, target, start, mid - 1);
//   } else if (target > arr[mid]) {
//     return binarySearch(arr, target, mid + 1, end);
//   } else if (target === arr[mid]) {
//     return mid;
//   }
// }

// let index = binarySearch(arr, target, start, end);
// console.log(index);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const start = 0;
// const end = arr.length - 1;
// const target = 90;
// function binarySearch(arr, target, start, end) {
//   // console.log(start, end);
//   if (start > end) {
//     return -1;
//   }
//   let mid = Math.floor((start + end) / 2);
//   if (target < arr[mid]) {
//     end = mid - 1;
//     return binarySearch(arr, target, start, end);
//   } else if (target > arr[mid]) {
//     start = mid + 1;
//     return binarySearch(arr, target, start, end);
//   } else {
//     return mid;
//   }
// }

// console.log("The index is ", binarySearch(arr, target, start, end));

// const data = "This is my country";
// const arr = data.split(" ");
// console.log(arr.reverse().join(" "));

// const data = "India";
// console.log(data.split("").reverse().join(""));

// const data = "India is our country";
// // console.log(data.split("").reverse().join(""));
// function reverseThe(str) {
//   const newArr = str.split(" ");
// }

// // console.log(String.fromCharCode(65));
// // console.log(String.fromCharCode(90));
// // console.log(String.fromCharCode(97));
// // console.log(String.fromCharCode(122));
// console.log();

// const arr = [1, 2, [3, 4, [5, 6, 7]], 99, 21, [{ name: "Amans" }]];
// let newArr = [];
// function flatArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flatArr(arr[i]);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(flatArr(arr));

//palimdrome or not
// let num = 121;
// let rev = 0;
// function isPalindrome(num) {
//   while (num > 0) {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   return rev;
// }
// console.log(isPalindrome(num));

// let num = 121;
// let rev = 0;
// function isPalindrome(num) {
//   while (num > 0) {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   return rev;
// }
// console.log(isPalindrome(num));

//Armstroing number
// let num = 153;
// let data = num + "";
// let sum = 0;
// function checkingArmstrongNum(num) {
//   for (let i = 0; i < data.length; i++) {
//     let rem = parseInt(data[i]);
//     sum = sum + rem ** data.length;
//   }
//   return sum;
// }
// console.log(checkingArmstrongNum(num));

//checking vowels
// function checkingVowels(str) {
//   const vowels = str.match(/[aeiou]/gi);
//   return vowels ? vowels.length : 0;
// }
// console.log(checkingVowels("hello"));

//checking for anagram string
// function anagramString(str1, str2) {
//   return str1.split("").sort().join("") == str2.split("").sort().join("");
// }
// console.log(anagramString("lsiten", "sitlen"));

//remove duplicate
// function duplicateLetter(str) {
//   let data = str
//     .split("")
//     .filter((char, index, self) => self.indexOf(char) === index)
//     .join("");
//   return data;
// }
// console.log(duplicateLetter("Hello"));

// another way
// function removeDuplicate(str) {
//   let data = str.split("");
//   let obj = {};
//   let newArr = [];
//   for (let char of data) {
//     obj[char] = obj[char] + 1 || 1;
//     if (obj[char] < 2) {
//       newArr.push(char);
//     }
//   }
//   return newArr.join("");
// }
// console.log(removeDuplicate("Hello"));

//capitalize first letter
// function captilize(str) {
//   let data = str.split(" ");
//   for (let i = 0; i < data.length; i++) {
//     data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
//   }
//   return data.join(" ");
// }
// console.log(captilize("hii everyone i am aman"));

//compressed the string
// function compressed(str) {
//   let count = 1;
//   let compress = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       compress += str[i] + count;
//       count = 1;
//     }
//   }
//   return compress;
// }
// console.log(compressed("aaabbddddd"));

// rotate the string
// function rotateString(str, n) {
//   let index = n % str.length;
//   return str.slice(index) + str.slice(0, index);
// }
// console.log(rotateString("RoationalArray", 4));

// longest substring without repeating a character
// function longestSubString(str) {
//   let long = "";
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!newStr.includes(str[i])) {
//       newStr += str[i];
//     } else {
//       if (newStr.length > long.length) {
//         long = newStr;
//         newStr = "";
//       }
//     }
//   }
//   return long;
// }
// console.log(longestSubString("abcdefabc"));

//regex function
// const regex = /^[A-Za-z0-9+-.%]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,3}$/g;
// const email = "amanbisht1010@gmail.coms";
// console.log(regex.test(email));

//isValid parenthesis
// function validParenthesis(str) {
//   const arr = [];
//   const pair = { ")": "(", "]": "[", "}": "{" };
//   for (let char of str) {
//     console.log("Char i", char);
//     if (char in pair) {
//       console.log(char);
//       if (arr.pop() !== pair[char]) {
//         return false;
//       }
//     } else {
//       console.log("Arr", char);
//       arr.push(char);
//     }
//   }
//   return arr.length == 0;
// }
// console.log(validParenthesis("(){}[]"));

// repeat
// function validParanthesis(str) {
//   const arr = [];
//   // const pair = { "(": ")", "{": "}", "[": "]" };
//   const pair = { ")": "(", "]": "[", "}": "{" };
//   for (let char of str) {
//     if (char in pair) {
//       if (arr.pop() !== pair[char]) {
//         return false;
//       }
//     } else {
//       arr.push(char);
//     }
//   }
//   return arr.length == 0;
// }

// console.log(validParanthesis("()[]{}"));
