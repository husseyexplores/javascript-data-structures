// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/*
 * Solution #1 - own;
 */
// const vowels = str => {
//   const cleanStr = str.replace(/[[^a-zA-z]]/g, '').toLowerCase();
//   const checker = 'a,e,i,o,u'.split(''); // arr

//   let count = 0;

//   for (const char of cleanStr) {
//     if (checker.includes(char)) count++;
//   }

//   return count;
// };

/*
 * Solution #2;
 */
const vowels = str => (str.match(/[aeiou]/gi) || []).length;

module.exports = vowels;
