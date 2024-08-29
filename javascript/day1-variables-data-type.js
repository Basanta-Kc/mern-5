console.log(this);
var faculty;
console.log("faculty", faculty);
//   console.log("hello world!!");
//   // Variables (var, const, let)
//   const personName = "basanta";
//   const age = 10;
//   let address = "samakushi";
//   address = "gongabu";
// id, name, age, class, adrress, dob, hasPaidFee(true or false)
faculty = "science";
console.log(this.faculty);
const id = 1;
const name = "basanta";
const age = 10;
console.log(this.age);
const address = "samakushi";
const GRAVITY_OF_EARTH = 9.8;
const hasPaidFee = true;
let dob;
const studetClass = null;

// bigInt, Symbol
console.log(typeof id);
console.log(typeof name);
console.log(typeof hasPaidFee);
console.log(typeof dob);
console.log(typeof studetClass);

const person = {
  id: 1,
  name: "basanta",
  address: "samkushi",
};

function add(a, b) {
  // a = 2, b= 3
  console.log(number);
  var number = 10;
  const number2 = 20;
  if (true) {
    const number3 = 30;
  }
  console.log(number3);
  return a + b;
}

add(2, 3);
// this bind (var)
// hoisting
// var(function scope), let const (block)
// var, let (change), const (cannot change)
