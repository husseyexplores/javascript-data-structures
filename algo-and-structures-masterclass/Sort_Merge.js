/*
  - Create an empty array (to be returned at the end)
  - Take a look at the smallest values in each input array
  - While there are still values we haven't looked at:
    > If the value in the first array is smaller than the value in the second array
      push the value in the first array to results array and move on to the next value in the first array
    > If the value in the first array is larger than the value in the second array
      push the value in the second array to results array and move on to the next value in the second array
    > Once we exhaust one array, push in all the remaining values from the other array.
*/

const merge = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]); // push the smaller
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // 3 approaches to merge the remaining items

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  // if (i < arr1.length) result = result.concat(arr1.splice(i));
  // if (j < arr2.length) result = result.concat(arr2.splice(j));

  // if (i < arr1.length) result.splice(result.length, 0, ...arr1.splice(i));
  // if (j < arr2.length) result.splice(result.length, 0, ...arr2.splice(j));

  return result;
};

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const firstHalf = mergeSort(arr.slice(0, middle));
  const secondHalf = mergeSort(arr.slice(middle));
  return merge(firstHalf, secondHalf);
};

mergeSort([10, 24, 76, 73]);
