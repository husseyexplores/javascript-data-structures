// Doubly Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const tailToRemove = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tailToRemove.prev;
      this.tail.next = null;
      tailToRemove.prev = null;
    }
    this.length--;
    return tailToRemove;
  }

  shift() {
    if (!this.head) return undefined;
    const headToRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = headToRemove.next;
      this.head.prev = null;
      headToRemove.next = null;
    }
    this.length--;
    return headToRemove;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    const middle = Math.floor(this.length / 2);
    let counter;
    let currentNode;
    if (idx <= middle) {
      counter = 0;
      currentNode = this.head;
      while (counter !== idx) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;
      while (counter !== idx) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  set(idx, val) {
    if (idx < 0 || idx >= this.length) return false;
    const foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(idx - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const nodeToRemove = this.get(idx);
    const beforeNode = nodeToRemove.prev;
    const afterNode = nodeToRemove.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;

    return nodeToRemove;
  }
}

const list = new DoublyLinkedList();
list.push('Hi!');
list.push('Good morning.');
list.push('Good afternoon');
list.push('Good evening');
list.push('Good night.');
list.push('Bye!');
