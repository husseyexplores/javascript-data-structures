// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
 * Solution #1 - trial and error
 */
function maxChar(str) {
  const freqCounter = {};
  for (const char of str) {
    freqCounter[char] = freqCounter[char] + 1 || 1;
  }

  let max = 0;
  let result;

  for (const key in freqCounter) {
    if (freqCounter[key] > max) {
      max = freqCounter[key];
      result = key;
    }
  }

  return result;
}

module.exports = maxChar;
