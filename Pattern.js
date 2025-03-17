// Pattern 1
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (j = 0; j < i + 1; j++) {
//     data += " * ";
//   }
//   data += "\n";
// }

// console.log(data);

// const data = "india is my country";
// let result = "";
// let word = "";
// for (let i = data.length - 1; i >= 0; i--) {
//   if (data[i] == " ") {
//     // if (word.length > 0) {
//     result += word + " ";
//     word = "";
//     // }
//   } else {
//     word = data[i] + word;
//   }
// }

// for (let i = data.length - 1; i >= 0; i--) {
//   if (data[i] === " ") {
//     if (word.length > 0) {
//       result += word + " ";
//       word = "";
//     }
//   } else {
//     word = data[i] + word;
//   }
// }
// result = result + word;

// console.log(result);

//Pattern 2
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = n; j > i; j--) {
//     data += "*";
//   }
//   data += "\n";
// }
// console.log(data);

//Pattern 3
// let n = 6;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     data += j + 1;
//   }
//   data += "\n";
// }
// console.log(data);

//Pattern 4
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     data += j + 1;
//   }
//   data += "\n";
// }
// console.log(data);

// Pattern 5
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = n; j > i; j--) {
//     data += j;
//   }
//   data += "\n";
// }
// console.log(data);

//Patter 6
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (j < n - i - 1) {
//       data += " ";
//     } else {
//       data += "*";
//     }
//   }
//   data += "\n";
// }
// console.log(data);

//another
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (i + j < n - 1) {
//       data += " ";
//     } else {
//       data += "*";
//     }
//   }
//   data += "\n";
// }
// console.log(data);

//Pattern 7
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     data += i + 1;
//   }
//   data += "\n";
// }
// console.log(data);

// Pattern 8
// let n = 5;
// let data = "";
// let count = 1;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     data += count + " ";
//     count += 1;
//   }
//   data += "\n";
// }
// console.log(data);

//Patern 9
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let space = 0; space < n - i - 1; space++) {
//     data += " ";
//   }
//   for (let j = 0; j < i + 1; j++) {
//     data += "* ";
//   }
//   data += "\n";
// }
// console.log(data);

// Pattern 10
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let space = 0; space < n - i - 1; space++) {
//     data += " ";
//   }
//   for (let j = 0; j < i * 2 + 1; j++) {
//     data += "*";
//   }
//   data += "\n";
// }
// console.log(data);

// Repeat Pattern 9
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let space = 0; space < n - i - 1; space++) {
//     data += " ";
//   }
//   for (let j = 0; j < i + 1; j++) {
//     data += "* ";
//   }
//   data += "\n";
// }
// console.log(data);

// Repeat Pattern 10
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let space = 0; space < n - i - 1; space++) {
//     data += " ";
//   }
//   for (let j = 0; j < i * 2 + 1; j++) {
//     data += "*";
//   }
//   data += "\n";
// }
// console.log(data);

//Pattern 11
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let space = 0; space < i; space++) {
//     data += " ";
//   }
//   for (let j = 0; j < (n - i) * 2 - 1; j++) {
//     data += "*";
//   }
//   data += "\n";
// }
// console.log(data);

//Pattern 12
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let space = 0; space < n - i - 1; space++) {
//     data += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     data += "*";
//   }
//   data += "\n";
// }
// for (let i = 0; i < n - 1; i++) {
//   for (let space = 0; space <= i; space++) {
//     data += " ";
//   }
//   for (let j = 0; j < (n - 1 - i) * 2 - 1; j++) {
//     data += "*";
//   }
//   data += "\n";
// }
// console.log(data);

//Pattern 13;
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     data += "*";
//   }
//   data += "\n";
// }
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j <= n - 1 - i - 1; j++) {
//     data += "*";
//   }
//   data += "\n";
// }
// console.log(data);

// console.log(String.fromCharCode(65));
// console.log(String.fromCharCode(90));
// console.log(String.fromCharCode(97));
// console.log(String.fromCharCode(122));

// Patter 14
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     data += String.fromCharCode(65 + j) + " ";
//   }
//   data += "\n";
// }
// console.log(data);

//Pattern 15
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     data += String.fromCharCode(65 + j) + " ";
//   }
//   data += "\n";
// }
// console.log(data);

//Patter 16;
// let n = 5;
// let data = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     data += String.fromCharCode(65 + i) + " ";
//   }
//   data += "\n";
// }
// console.log(data);
