// -----------------------------
// VARIABLES & CONSTANTS
// -----------------------------
let age = 21;
const PI = 3.14;

console.log(age, PI); // Output: 21 3.14

// -----------------------------
// DATA TYPES CHECKING
// -----------------------------
console.log(typeof age); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean

let num = "50";

// Type Conversion Examples
console.log(typeof Number(num)); // number
console.log(Boolean("5")); // true (non-empty string is truthy)

// -----------------------------
// OPERATORS
// -----------------------------

// Arithmetic & Comparison
console.log(10 + 5); // 15
console.log(10 > 5); // true

// == vs ===
console.log(5 == "5"); // true (only checks value)
console.log(5 === "5"); // false (checks value + type)

// Ternary Operator
console.log(5 < 3 ? "Yes" : "No"); // Output: No

// -----------------------------
// CONDITIONAL STATEMENTS
// -----------------------------

// if / else
if (5 > 3) {
  console.log("Yes");
} else {
  console.log("No");
}

// switch
let day = 20;

switch (day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  default:
    console.log("Invalid Num");
}

// -----------------------------
// LOOPS
// -----------------------------

// Regular for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// for...of → used for arrays
const nums = [10, 20, 30, 40];
for (const num of nums) {
  console.log(num);
}

// for...in → used for objects
const user = {
  name: "JD",
  age: 25,
};

for (const key in user) {
  console.log(key, user[key]);
}

// -----------------------------
// FUNCTIONS (3 TYPES)
// -----------------------------

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

console.log(
  add(5, 5), // 10
  multiply(4, 3), // 12
  divide(10, 2) // 5
);

// -----------------------------
// STRING METHODS
// -----------------------------
let msg = "Hello JD";

console.log(msg.length); // 8
console.log(msg.slice(0, 5)); // Hello
console.log(msg.includes("JD")); // true

// -----------------------------
// OBJECT METHODS
// -----------------------------
const student = {
  name: "JD",
  age: 25,
};

console.log(Object.keys(student)); // [ 'name', 'age' ]
console.log(Object.values(student)); // [ 'JD', 25 ]

// -----------------------------
// RECURSION EXAMPLE (FACTORIAL)
// -----------------------------
function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(5)); // Output: 120
