// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/*
 * Solution #1 - own;
 */
const fib = n => {
  if (n === 1) return 1;
  let result = 0;
  let prevNum = 0;
  let curNum = 1;
  for (let i = 1; i < n; i++) {
    result = prevNum + curNum;
    prevNum = curNum;
    curNum = result;
  }
  return result;
};

module.exports = fib;
