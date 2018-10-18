// pointers - from left only - iterates only once over the array

// provided array is already sorted
// Time complexity O(n) - Space complexity O(1);

const countUniqueVal = arr => {
  if (!arr.length) {
    return 0;
  } else if (arr.length === 1) {
    return 1;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
}

countUniqueVal([1, 1, 1, 1, 2]); // 2
countUniqueVal([1, 2, 2, 3, 4, 4, 6]); // 5
countUniqueVal([-2, -1, -1, 0, 1, 3, 3]); // 5
countUniqueVal([]); // 0