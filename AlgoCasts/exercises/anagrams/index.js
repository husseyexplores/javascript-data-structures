// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*
 * Solution #1 - own - his
 */
// helper
// const buildCharMap = str => {
//   const freqCounter = {};
//   const cleanedStr = str.replace(/[\^w]/g, '').toLowerCase();

//   for (const char of cleanedStr) {
//     freqCounter[char] = freqCounter[char] + 1 || 1;
//   }

//   return freqCounter;
// };

// function anagrams(stringA, stringB) {
//   const freqCounterA = buildCharMap(stringA);
//   const freqCounterB = buildCharMap(stringB);

//   // Comparing freq counter objects
//   const aProps = Object.getOwnPropertyNames(freqCounterA);
//   const bProps = Object.getOwnPropertyNames(freqCounterB);
//   if (aProps.length !== bProps.length) return false;

//   for (const key in freqCounterA) {
//     if (freqCounterA[key] !== freqCounterB[key]) {
//       return false;
//     }
//   }

//   return true;
// }

/*
 * Solution #2
 */
// hepler
const cleanedString = str =>
  str
    .replace(/[^\w]/gi, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

const anagrams = (strA, strB) => cleanedString(strA) === cleanedString(strB);

module.exports = anagrams;
