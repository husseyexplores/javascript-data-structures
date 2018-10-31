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
}

const list = new DoublyLinkedList();
list.push('Hi!');
list.push('Good morning.');
list.push('Good afternoon');
list.push('Good evening');
list.push('Good night.');
list.push('Bye!');
