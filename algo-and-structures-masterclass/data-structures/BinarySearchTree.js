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

  BFS() {
    if (!this.root) return null;
    const q = [];
    const data = [];
    let node = this.root;
    q.push(node);
    while (q.length) {
      node = q.shift();
      data.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return data;
  }

  DFSPO() {
    if (!this.root) return null;
    const data = [];
    const traverse = node => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
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

/*

           20
    10           40
  5     15          25
      12               34


// BFS [20, 10, 40, 5, 15, 25, 12, 34]
// DFS [20, 10, 5, 15, 12, 40, 25, 34]
*/
