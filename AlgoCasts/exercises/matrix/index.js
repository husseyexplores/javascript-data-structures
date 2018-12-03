// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
/* eslint-disable */
const matrix = num => {
  const result = new Array(num).fill(new Array(num));
  let startRowIdx = 0;
  let startColIdx = 0;
  let endRowIdx = num - 1;
  let endColIdx = num - 1;

  let counter = 1;

  while (startColIdx <= endColIdx && startRowIdx <= endRowIdx) {
    for (let i = startColIdx; i <= endColIdx; i++) {
      result[startRowIdx][i] = counter;
      counter++;
    }

    startRowIdx++;

    for (let i = startRowIdx; i <= endRowIdx; i++) {
      result[i][endColIdx] = counter;
      counter++;
    }

    endRowIdx--;
  }

  return result;
};
matrix(3);
module.exports = matrix;
