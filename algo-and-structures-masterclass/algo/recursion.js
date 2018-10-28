// 1
// Basic recursion

const sumRange = num => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

sumRange(3); // returns 6

// 2
// Iterative
const factorialI = n => {
  if (n < 1) return 0;
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
factorialI(4); // returns 24

// Recursive
const factorialR = n => {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return n * factorialR(n - 1);
};
factorialR(4); // returns 24

// 3
const power = (base, exp) => {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
};
power(2, 3); // returns 8

// 4
const productOfArray = arr => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};
productOfArray([1, 2, 3, 4, 5]); // returns 120

// fibonacci sequence - nth number
const fibonacci = n => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
