class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    this.adjacencyList[value] = [];
  }
}

const g = new Graph();
g.addVertex('Ontario');
g.addVertex('Karachi');
g.addVertex('Lahore');
g.addVertex('Hunza');
