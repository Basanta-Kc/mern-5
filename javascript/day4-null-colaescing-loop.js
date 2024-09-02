// ?? Null Coalesicing Operator
// const perons = {
//     name: "basnata",
// }
// const result2 = perons.age ?? 0;
// let personName = '';
// const result = personName ?? "No Name";

// console.log(result);
// loop (1 to 10)
const command = prompt("Enter Operation: ??");
console.log(command);
console.log("----while----");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("---for-----");
for (let i = 1; i <= 10; ++i) {
  if (i === 4) continue;
  console.log(i);
}
console.log("---for end-----");

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);
