// const arr = [1, 2, 3, 4];
// function data(arr) {
//   const newA = arr;
//   function print() {
//     let str = "";
//     for (let i = 0; i < newA.length; i++) {
//       str += newA[i];
//     }
//     return str;
//   }
//   return {
//     print: print,
//   };
// }

// const array = data(arr);
// console.log(array.print());

// const datas = "123445";
// console.log(datas.split(""));

// const arr = [1, 2, 3, 4, 5, 6];
// function printArray(arr) {
//   const data = arr;
//   function print() {
//     return data.join(",");
//   }
//   return {
//     print: print,
//   };
// }

// const array = printArray(arr);
// console.log(array.print());

// const data = "History";
// let str = "";
// for (let i = 0; i < data.length; i++) {
//   str += data[data.length - i - 1];
// }
// console.log(str);

// const data = "india is my country";
// console.log(data.length, data[18]);
// let rev = "";
// for (let i = data.length - 1; i >= 0; i--) {
//   rev += data[i];
// }
// console.log(rev);

// const data = "india is my country";
// function reverseStrig(str) {
//   let rev = [];
//   let datas = data.split(" ");
//   console.log(data);
//   for (let i = datas.length - 1; i >= 0; i--) {
//     rev.push(datas[i]);
//   }
//   return rev.join(" ");
// }
// console.log(reverseStrig(data));

// function reverseString(sentence) {
//   let words = "";
//   let result = "";
//   for (let i = sentence.length - 1; i >= 0; i--) {
//     if (sentence[i] == " ") {
//       result = words + " " + result;
//       words = "";
//     } else {
//       words = sentence[i] + words;
//     }
//   }
//   result = words + " " + result;
//   //   console.log(result);
//   return result;
// }
// console.log(reverseString("India is my country"));

// function reverseWords(sentence) {
//   let result = "";
//   let word = "";

//   for (let i = sentence.length - 1; i >= 0; i--) {
//     if (sentence[i] === " ") {
//       result = word + " " + result;
//       word = "";
//     } else {
//       // Build the word backwards
//       word = sentence[i] + word;
//     }
//   }

//   // Add the last word to the result
//   result = word + " " + result;

//   // Remove the trailing space
//   return result.trim();
// }

// // Usage
// const originalSentence = "India is my country";
// const reversedSentence = reverseWords(originalSentence);

// console.log(reversedSentence); // Output: "country is my India"

// function reverseStringWords(input) {
//   let words = [];
//   let word = "";

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === " ") {
//       if (word) {
//         words.push(word);
//         word = "";
//       }
//     } else {
//       word += input[i];
//     }
//   }

//   if (word) {
//     words.push(word);
//   }

//   let reversedString = "";
//   for (let i = words.length - 1; i >= 0; i--) {
//     reversedString += words[i];
//     if (i > 0) {
//       reversedString += " ";
//     }
//   }

//   return reversedString;
// }

// console.log(reverseStringWords("India is my country"));

// const data = "india is my country";
// function reverse(str) {
//   let word = "";
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === " ") {
//       result += word + " ";
//       word = "";
//     } else {
//       word = str[i] + word;
//     }
//   }
//   result += word;
//   return result;
// }

// console.log(reverse(data));

// Array.prototype.custom = function (start, end) {
//   let length = this.length;
//   start = start || 0;
//   start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
//   end = end == undefined ? length : end;
//   end = end < 0 ? Math.max(length + end, 0) : Math.min(length, end);
//   let result = [];
//   for (let i = start; i < end; i++) {
//     result.push(this[i]);
//   }
//   return result;
// };

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(data.custom(2, 6));
// console.log(data.custom());
// console.log(data.custom(-3, -1));
// // console.log(data.slice(-1, -3));
// console.log(data.join());
// console.log(data);

Array.prototype.print = function (seperator = ",") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    if (i == this.length - 1) result += this[i];
    else result += this[i] + seperator;
  }
  return result;
};

const data = [1, 2, 3, 4, 5];
console.log(data.print(""));
// console.log(data.join(""));
