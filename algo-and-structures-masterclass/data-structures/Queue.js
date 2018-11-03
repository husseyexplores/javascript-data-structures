// Queue

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const nodeToRemove = this.first;
    this.first = nodeToRemove.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return nodeToRemove.val;
  }
}

const q = new Queue();
q.enqueue('First');
q.enqueue('Second');
q.enqueue('Third');
q.enqueue('Fourth');
