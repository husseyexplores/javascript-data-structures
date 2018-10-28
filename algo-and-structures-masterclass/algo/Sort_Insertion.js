/*
  - Start by picking the second element in the array
  - Now compare the second element to the one before it and swap if necessary
  - Continue to next element and if it is in the incorrect order, iterate
    through the sorted portion (i.e left to right) to place the element in the correct place
  - repeat until the array is sorted
*/

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let j = i - 1;
    // if previous val is bigger than current val
    for (j; arr[j] > currentVal && j >= 0; j--) {
      arr[j + 1] = arr[j]; // move it up one space
    }
    arr[j + 1] = currentVal; // need arr[j + 1] because j got decremented at the end of the loop, it is no longer same as the inner arr[j + 1]
  }
  return arr;
};

console.log(insertionSort([2, 1, 3])); // returns sorted array
console.log(insertionSort([2, 3, 4, 5, 1])); // returns sorted array
