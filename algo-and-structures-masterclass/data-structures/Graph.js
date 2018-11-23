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
    this.addVertex(vtx1);
    this.addVertex(vtx2);

    if (!this.adjacencyList[vtx1].includes(vtx2)) {
      this.adjacencyList[vtx1].push(vtx2);
    }

    if (!this.adjacencyList[vtx2].includes(vtx1)) {
      this.adjacencyList[vtx2].push(vtx1);
    }
  }

  removeEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      item => item !== vtx2
    );
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      item => item !== vtx1
    );
  }
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addVertex('Singapore');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Aspen', 'Dallas');
g.addEdge('Aspen', 'Singapore');
g.addEdge('Japan', 'Singapore');
