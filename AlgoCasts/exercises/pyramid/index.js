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
const pyramid = n => {
  const maxChars = n * 2 - 1;
  const midPoint = Math.floor(maxChars / 2);

  for (let i = 0; i < n; i++) {
    // create a empty array with filled with spaces - Each stair
    const strArr = new Array(maxChars).fill(' ');

    // hashes start from this idx
    let hashIdx = midPoint - i;
    // total hashes for each step;
    const totalStepHashes = i * 2 + 1;

    // replace the spaces with hashes
    for (let j = 0; j < totalStepHashes; j++) {
      strArr[hashIdx] = '#';
      hashIdx++;
    }

    console.log(strArr.join(''));
  }
};

module.exports = pyramid;
