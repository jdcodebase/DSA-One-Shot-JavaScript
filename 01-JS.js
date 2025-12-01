// -------------------- VARIABLES --------------------

let age = 21; // let → value can change
const PI = 3.14; // const → value cannot change

console.log(age, PI);

// Uncommenting below will throw an error because PI is constant
// PI = 3.15;
// console.log(PI);

// -------------------- TYPE CHECKING --------------------

console.log(typeof age); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean

// -------------------- TYPE CONVERSION --------------------

let num = "50";

console.log(typeof Number(num)); // number

// -------------------- OPERATORS --------------------

// Arithmetic
console.log(10 + 5);
console.log(10 - 5, 10 * 5, 10 / 5);

// Comparison
console.log(5 == "5"); // true (value only)
console.log(5 === "5"); // false (value + type strict compare)

// Logical
console.log(true && false); // false
console.log(true || false); // true

// Ternary
console.log(5 > 3 ? "Yes" : "No");

// -------------------- IF ELSE --------------------

if (5 > 3) {
  console.log("Yes");
} else {
  console.log("No");
}

// -------------------- SWITCH --------------------

let day = 2;

switch (day) {
  case 1:
    console.log("Sun");
    break;
  case 2:
    console.log("Mon");
    break;
  case 3:
    console.log("Tue");
    break;
  default:
    console.log("Invalid day");
}

// -------------------- LOOPS --------------------

// Normal for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// -------------------- LOOP VARIATIONS --------------------

// for...of (Used with arrays)
let nums = [10, 20, 30, 40];
for (const n of nums) {
  console.log(n);
}

// for...in (Used with objects)
const user = {
  name: "JD",
  age: 20,
};

for (const key in user) {
  console.log(key, user[key]);
}

// -------------------- FUNCTIONS --------------------

// 1. Normal Function
function add(a, b) {
  return a + b;
}

// 2. Arrow Function
const multiply = (a, b) => a * b;

// 3. Function Expression
const divide = function (a, b) {
  return a / b;
};

console.log(add(5, 5), multiply(5, 2), divide(10, 2));

// -------------------- STRING METHODS --------------------

let msg = "Hello JD";
console.log(msg.length); // 8
console.log(msg.slice(0, 5)); // Hello
console.log(msg.includes("JD")); // true

// -------------------- OBJECT METHODS --------------------

const student = {
  name: "JD",
  age: 21,
};

console.log(Object.keys(student)); // ['name', 'age']
console.log(Object.values(student)); // ['JD', 21]
console.log(Object.entries(student)); // [['name','JD'], ['age',21]]

// -------------------- RECURSION --------------------

function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1); // recursive call
}

console.log(fact(5)); // Output: 120
// Explanation: 5 * 4 * 3 * 2 * 1
