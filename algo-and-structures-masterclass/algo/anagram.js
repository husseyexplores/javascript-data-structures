// TC => O(n)

const isValidAnagram = (first, second) => {
  // if length is not the same, it can never be an anagram
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (const char of first) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (const char of second) {
    // if letter doesn't exist, return false, else (if found) minus one from the letter count
    if (!lookup[char]) {
      return false;
    }
    lookup[char]--;
  }

  return true;
};

isValidAnagram('', ''); // true
isValidAnagram('aaz', 'zaa'); // true
isValidAnagram('rat', 'car'); // false
isValidAnagram('qwerty', 'tyerwq'); // true
isValidAnagram('sadsav', 'sadazz'); // false
