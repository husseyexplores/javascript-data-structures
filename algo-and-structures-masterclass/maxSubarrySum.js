// O(n^2) - naive solution
const maxSubarrySum1 = (arr, num) => {
  if (num > arr.length) return null;
  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let tempSum = 0;
    for (let j = 0; j < num; j++) {
      tempSum += arr[i + j];
      if (tempSum > max) {
        max = tempSum;
      }
    }
  }
  return max;
};

maxSubarrySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); // 19

// Sliding window pattern
// TC => O(n) - SC => O(1)
const maxSubarrySum2 = (arr, num) => {
  if (num > arr.length) return null;

  let max = 0;
  let tempSum = 0;

  // store the sum of 'num' arg numbers
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  tempSum = max;

  // start the loop at the 'num' arg, because we already have the sum of initial 'num' values
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    max = Math.max(tempSum, max);
  }
  return max;
};

maxSubarrySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); // 19
