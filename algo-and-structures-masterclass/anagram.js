// TC => O(n)  

const isValidAnagram = (first, second) => {
  // if length is not the same, it can never be an anagram
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {}

  for (let char of first) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let char of second) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char]--;
    }
  }

  return true;
}

isValidAnagram('', ''); // true
isValidAnagram('aaz', 'zaa'); //true
isValidAnagram('rat', 'car'); // false
isValidAnagram('qwerty', 'tyerwq'); // true
isValidAnagram('sadsav', 'sadazz'); // false