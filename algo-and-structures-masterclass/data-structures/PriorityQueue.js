// Priority Queue - Min Binary Heap

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    let parentIdx;
    let parent;

    while (idx > 0) {
      parentIdx = Math.floor((idx - 1) / 2);
      parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.swap(this.values, idx, parentIdx);
      idx = parentIdx;
    }
  }

  dequeue() {
    if (this.values.length === 0) return null;
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    const { length } = this.values;
    const element = this.values[0];

    let idx = 0;
    let leftChildIdx;
    let rightChildIdx;
    let leftChild;
    let rightChild;

    while (true) {
      leftChildIdx = 2 * idx + 1;
      rightChildIdx = 2 * idx + 2;
      let swapIdx = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) swapIdx = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild.priority < element.priority) ||
          (swapIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

const pq = new PriorityQueue();
pq.enqueue('First', 3);
pq.enqueue('Fourth', 12);
pq.enqueue('Second', 6);
pq.enqueue('Third', 9);
