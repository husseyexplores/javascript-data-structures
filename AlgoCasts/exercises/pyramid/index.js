// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

/*
 * Solution #1 - own
 */
// const pyramid = n => {
//   const maxChars = n * 2 - 1;
//   const midPoint = Math.floor(maxChars / 2);

//   for (let i = 0; i < n; i++) {
//     // create a empty array with filled with spaces - Each stair
//     const strArr = new Array(maxChars).fill(' ');

//     // hashes start from this idx
//     let hashIdx = midPoint - i;
//     // total hashes for each step;
//     const totalStepHashes = i * 2 + 1;

//     // replace the spaces with hashes
//     for (let j = 0; j < totalStepHashes; j++) {
//       strArr[hashIdx] = '#';
//       hashIdx++;
//     }

//     console.log(strArr.join(''));
//   }
// };

// /*
//  * Solution #2 - own with pseudocode
//  */
// const pyramid = n => {
//   const maxChars = n * 2 - 1;
//   const midPoint = Math.floor(maxChars / 2);

//   for (let i = 0; i < n; i++) {
//     let str = '';
//     const hashMinIdx = midPoint - i;
//     const hashMaxIdx = midPoint + i;
//     for (let j = 0; j < maxChars; j++) {
//       if (j >= hashMinIdx && j <= hashMaxIdx) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//     console.log(str);
//   }
// };

/*
 * Solution #3 - own recursive
 */
const pyramid = (n, row = 0, str = '') => {
  const maxChars = n * 2 - 1;
  const midPoint = Math.floor(maxChars / 2);

  // base case, all done;
  if (n === row) {
    return;
  }

  // row is complete, print it;
  if (str.length === maxChars) {
    console.log(str);
    return pyramid(n, row + 1);
  }

  // build the stair/level
  const hashMinIdx = midPoint - row;
  const hashMaxIdx = midPoint + row;
  /* eslint-disable no-param-reassign */
  if (str.length >= hashMinIdx && str.length <= hashMaxIdx) {
    str += '#';
  } else {
    str += ' ';
  }
  pyramid(n, row, str);
};

module.exports = pyramid;
