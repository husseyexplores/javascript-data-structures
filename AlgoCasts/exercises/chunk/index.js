// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/*
 * Solution #1 - own
 */
// function chunk(arr, size) {
//   const result = [];

//   const tempArr = arr.reverse();
//   let subarrIdx = 0;
//   let tracker = 1;
//   while (tempArr.length) {
//     if (!result[subarrIdx]) result[subarrIdx] = [];
//     result[subarrIdx].push(tempArr.pop());
//     if (tracker === size) {
//       subarrIdx++;
//       tracker = 1;
//     } else {
//       tracker++;
//     }
//   }
//   return result;
// }

/*
 * Solution #2 - own
 */
// function chunk(arr, size) {
//   const result = [];

//   const tempArr = arr.reverse();
//   let subarrIdx = 0;
//   while (tempArr.length) {
//     if (!result[subarrIdx]) result[subarrIdx] = [];
//     if (result[subarrIdx].length === size) {
//       subarrIdx++;
//       result[subarrIdx] = [];
//     }
//     result[subarrIdx].push(tempArr.pop());
//   }
//   return result;
// }

/*
 * Solution #3
 */
// function chunk(arr, size) {
//   const result = [];

//   for (const val of arr) {
//     const last = result[result.length - 1];

//     if (!last || last.length === size) {
//       result.push([val]);
//     } else {
//       last.push(val);
//     }
//   }
//   return result;
// }

/*
 * Solution #4
 */
// function chunk(arr, size) {
//   const result = [];
//   let pre = 0;
//   let post = size;
//   let maxChunks = Math.ceil(arr.length / size);
//   while (maxChunks) {
//     result.push(arr.slice(pre, post));
//     pre = post;
//     post += size;
//     maxChunks--;
//   }
//   return result;
// }

/*
 * Solution #5
 */
function chunk(arr, size) {
  const result = [];
  let index = 0;

  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result;
}
module.exports = chunk;
