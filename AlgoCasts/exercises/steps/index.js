// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*
 * Solution #1 - own - O(n^2);
 */
// const steps = n => {
//   for (let i = 1; i <= n; i++) {
//     let stair = '';
//     const totalSpaces = n - i;
//     const totalHashes = i;

//     // Build hashes
//     for (let j = 1; j <= totalHashes; j++) {
//       stair += '#';
//     }

//     // Build Spaces
//     for (let j = 1; j <= totalSpaces; j++) {
//       stair += ' ';
//     }
//     console.log(stair);
//   }
// };

/*
 * Solution #2 - similar
 */
// const steps = n => {
//   for (let i = 1; i <= n; i++) {
//     let stair = '';

//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// };

/*
 * Solution #3 - recursion
 */
const steps = (n, row = 0, stair = '') => {
  // last row - base case;
  if (row === n) {
    return;
  }

  // stair is completed, print it and move to next row/stair
  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // building each stair;
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
};

module.exports = steps;
