class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vtx1, vtx2) {
    if (!this.adjacencyList[vtx1].includes(vtx2)) {
      this.adjacencyList[vtx1].push(vtx2);
    }

    if (!this.adjacencyList[vtx2].includes(vtx1)) {
      this.adjacencyList[vtx2].push(vtx1);
    }
  }
}

const g = new Graph();
g.addVertex('Ontario');
g.addVertex('Karachi');
g.addVertex('Lahore');
g.addVertex('Hunza');
