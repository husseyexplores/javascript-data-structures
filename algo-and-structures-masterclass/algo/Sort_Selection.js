// selection sort

const selectionSort = arr => {
  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };

  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }
    if (i !== smallest) swap(arr, i, smallest);
  }
  return arr;
};

console.log(selectionSort([5, 6, 2, 1, 8, 7, 45, 11, 61, 12, 0, -1])); // returns sorted array
