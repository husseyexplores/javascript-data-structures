// only works for sorted arrays
const binarySeach = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val > arr[middle]) {
      start = middle + 1;
    } else if (val < arr[middle]) {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
};

binarySeach([8, 16, 24, 32, 40, 48, 56, 64, 72, 80], 32);
