class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
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
    return true;
  }

  removeEdge(vtx1, vtx2) {
    if (!this.adjacencyList[vtx1] || !this.adjacencyList[vtx2]) return false;

    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      item => item !== vtx2
    );
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      item => item !== vtx1
    );
    return true;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;
    this.adjacencyList[vertex].map(item => this.removeEdge(vertex, item));
    delete this.adjacencyList[vertex];
    return true;
  }

  DFSRecursive(start) {
    const result = [];
    const visited = {};

    const helper = vtx => {
      if (!vtx) return null;

      result.push(vtx);
      visited[vtx] = true;

      this.adjacencyList[vtx].forEach(neighbour => {
        if (!visited[neighbour]) {
          helper(neighbour);
        }
      });
    };

    helper(start);
    return result;
  }

  DFSIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let vertex;

    while (stack.length) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;

        this.adjacencyList[vertex].forEach(neighbour => {
          stack.push(neighbour);
        });
      }
    }
    return result;
  }

  BFSIterative(start) {
    const q = [start];
    const result = [];
    const visited = {};
    let vertex;

    while (q.length) {
      vertex = q.shift();

      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;

        this.adjacencyList[vertex].forEach(neighbour => {
          q.push(neighbour);
        });
      }
    }
    return result;
  }
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addVertex('Singapore');
g.addVertex('Los Angeles');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Tokyo', 'Singapore');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Dallas', 'Singapore');
g.addEdge('Dallas', 'Los Angeles');
g.addEdge('Singapore', 'Los Angeles');
