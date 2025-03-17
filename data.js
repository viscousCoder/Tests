// function add(a) {
//   return function (b) {
//     return b ? add(a + b) : a;
//   };
// }

// console.log("The sum is :", add(1)(2)(3)(4)());

// function add(a) {
//   let v = (b) => {
//     return add(a + b);
//   };
//   v.valueOf = () => {
//     return a;
//   };
//   return v;
// }

// console.log(+add(2)(3)(4));
