// const number = +prompt("Enter Your Score ??"); // string, null => Nan, Numercie
// console.log(number);

// // 80 => a => 70 => b => 60 => c
// // console.log(number);

// if (typeof number === "number") {
//   if (number >= 80 && number <= 100) {
//     console.log("A");
//   } else if (number >= 70) {
//     console.log("B");
//   } else {
//     console.log("C");
//   }
// } else {
//   alert("Invalid Input");
// }

// const num = 10;

// if (num > 10) {
//   console.log("greater than 10");
// } else if (num === 10) {
//   console.log("nums is equal to 10");
// } else {
//   console.log("number is not equal and not greater than 10");
// }

// || and &&
// true || true => true,
// true || false => true
// true && true => true
// falsy => 0, nan, null, undefine, ""

const result = true && "" && "basanta" && null;
console.log(result);

if ("") {
  console.log("Inside If.");
}
