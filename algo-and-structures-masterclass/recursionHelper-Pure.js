// recursion with helper functions

const collectOddsH = arr => {
  const oddNums = [];

  const helper = helperInput => {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      oddNums.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };

  helper(arr);
  return oddNums;
};

collectOddsH([1, 2, 3, 4, 5, 6, 7, 8, 9]); // returns [1, 3, 5, 7, 9];

// recursion with pure functions

const collectOddsP = arr => {
  const oddNums = [];
  if (arr.length === 0) {
    return oddNums;
  }
  if (arr[0] % 2 !== 0) {
    oddNums.push(arr[0]);
  }
  return oddNums.concat(collectOddsP(arr.slice(1)));
};

collectOddsP([1, 2, 3, 4, 5, 6, 7, 8, 9]); // returns [1, 3, 5, 7, 9];
