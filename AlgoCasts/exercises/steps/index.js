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
const steps = n => {
  for (let i = 1; i <= n; i++) {
    let result = '';
    const totalSpaces = n - i;
    const totalHashes = i;

    // Build hashes
    for (let j = 1; j <= totalHashes; j++) {
      result += '#';
    }

    // Build Spaces
    for (let j = 1; j <= totalSpaces; j++) {
      result += ' ';
    }
    console.log(result);
  }
};

module.exports = steps;
