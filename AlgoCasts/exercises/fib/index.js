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
// const fib = n => {
//   if (n === 1) return 1;
//   let result = 0;
//   let prevNum = 0;
//   let curNum = 1;
//   for (let i = 1; i < n; i++) {
//     result = prevNum + curNum;
//     prevNum = curNum;
//     curNum = result;
//   }
//   return result;
// };

/*
 * Solution #2 - own recursive;
 */
// const fib = (n, prevNum = 0, curNum = 1, series = [0, 1]) => {
//   if (n === series.length - 1) return series[n];
//   const newPrevNum = curNum;
//   const newCurNum = prevNum + curNum;
//   series.push(newCurNum);
//   return fib(n, newPrevNum, newCurNum, series);
// };

/*
 * Solution #3 - Iterative
 */
// const fib = n => {
//   const series = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = series[i - 1];
//     const b = series[i - 2];
//     series.push(a + b);
//   }
//   return series[n];
// };

/*
 * Solution #4 - Recursive;
 */
const fib = (n, prevNum = 0, curNum = 1, series = [0, 1]) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

module.exports = fib;
