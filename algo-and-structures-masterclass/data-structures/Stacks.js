// Stacks

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    return ++this.size;
  }

  pop() {
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
