// bubble sort

const bubbleSort = arr => {
  const swap = (array, idx1, idx2) => {
    // ES5
    // const temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;

    // ES6
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

bubbleSort([4, 2, 6, 5, 1, 77, 24, 64, 23]); // returns sorted array
