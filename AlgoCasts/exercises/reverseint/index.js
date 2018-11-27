// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*
 * Solution #1 - trial and error
 */
// function reverseInt(n) {
//   let isNegative = false;
//   if (n < 0) isNegative = true;

//   const arr = String(n).split('');
//   const reversedArr = [];
//   let result;

//   for (const eachNum of arr) {
//     if (eachNum !== '-') reversedArr.push(eachNum);
//   }
//   result = +reversedArr.reverse().join('');
//   if (isNegative) result = -result;

//   return result;
// }

/*
 * Solution #2
 */
function reverseInt(n) {
  const result = parseInt(
    String(n)
      .split('')
      .reverse()
      .join('')
  );

  return result * Math.sign(n);
}

module.exports = reverseInt;
