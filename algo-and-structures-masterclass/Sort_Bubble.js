// bubble sort

const swap = (arr, idx1, idx2) => {
  // ES5
  // const temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // ES6
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = arr => {
  // bubble sort logic
};
