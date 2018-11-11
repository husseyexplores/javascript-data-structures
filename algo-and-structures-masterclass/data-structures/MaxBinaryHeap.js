const swap = (array, idx1, idx2) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let currIdx = this.values.length - 1;
    let currParentIdx = Math.floor((currIdx - 1) / 2);

    while (this.values[currIdx] > this.values[currParentIdx] && currIdx > 0) {
      swap(this.values, currIdx, currParentIdx);
      currIdx = currParentIdx;
      currParentIdx = Math.floor((currIdx - 1) / 2);
    }
  }

  extractMax() {
    if (this.values.length === 0) return null;
    swap(this.values, 0, this.values.length - 1);
    this.bubbleDown();
    return this.values.pop();
  }

  bubbleDown() {
    const { length } = this.values;
    let currIdx = 0;
    let fcIdx;
    let scIdx;
    let swapWithIdx;
    while (true) {
      fcIdx = 2 * currIdx + 1;
      scIdx = 2 * currIdx + 2;
      if (currIdx === length - 1 || fcIdx > length - 1 || scIdx > length - 1) {
        break;
      }

      if (this.values[fcIdx] > this.values[scIdx]) {
        swapWithIdx = fcIdx;
      } else {
        swapWithIdx = scIdx;
      }
      swap(this.values, currIdx, swapWithIdx);
      currIdx = swapWithIdx;
    }
  }
}

const mbh = new MaxBinaryHeap();
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
