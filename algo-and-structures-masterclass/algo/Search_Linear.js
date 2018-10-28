// Linear Search - O(n)

const indexOf = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) return i;
  }
  return -1;
};
indexOf(['Cat', 'Dog', 'Horse', 'Lion', 'Tiger'], 'Horse'); // returns 2
