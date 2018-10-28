const getDigit = (num, i) => Math.floor(Math.abs(num) / 10 ** i) % 10;

const getDigitCount = num =>
  num === 0 ? 0 : Math.floor(Math.log10(Math.abs(num))) + 1;

const mostDigits = arr => {
  let maxDigits = 0;
  for (const num of arr) {
    maxDigits = Math.max(getDigitCount(num), maxDigits);
  }
  return maxDigits;
};

const radixSort = arr => {
  const maxDigitsCount = mostDigits(arr);

  for (let k = 0; k <= maxDigitsCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

console.log(
  radixSort([1, 34, 2, 346, 542, 14, 637, 852, 1563, 4561, 345, 4, 9])
);
