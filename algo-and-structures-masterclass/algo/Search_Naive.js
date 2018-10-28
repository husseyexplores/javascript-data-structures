// naive string search

const naiveSearch = (str, val) => {
  const loopLimit = str.length - (val.length - 1);
  let matchCount = 0;
  for (let i = 0; i < loopLimit; i++) {
    for (let j = 0; j < val.length; j++) {
      if (str[i + j] !== val[j]) break;
      if (j === val.length - 1) matchCount++;
    }
  }
  return matchCount;
};

naiveSearch('hello dog cat horse mouse cat elephant', 'cat'); // returns 2
