class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (val === currentNode.val) return undefined;
      if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        found = true;
      }
    }
    return currentNode;
  }
}

const tree = new BinarySearchTree();
tree.insert(20);
tree.insert(10);
tree.insert(40);
tree.insert(15);
tree.insert(25);
tree.insert(5);
tree.insert(34);
tree.insert(12);
