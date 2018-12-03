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

const matrix = num => {
  const result = Array.from({ length: num }, () => new Array(num).fill(0));
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

    endColIdx--;

    for (let i = endColIdx; i >= startColIdx; i--) {
      result[endRowIdx][i] = counter;
      counter++;
    }

    endRowIdx--;

    for (let i = endRowIdx; i >= startRowIdx; i--) {
      result[i][startColIdx] = counter;
      counter++;
    }

    startColIdx++;
  }

  return result;
};

module.exports = matrix;

/*
           colStart=0                colEnd=3
 rowStart=0    [[1,      2,      3,     4],
               [12,     13,     14,     5],
               [11,     16,     15,     6],
 rowEnd=3      [10,      9,      8,     7]]
*/
