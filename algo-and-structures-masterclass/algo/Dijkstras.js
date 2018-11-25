class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enq(val, prio) {
    this.values.push({
      val,
      prio,
    });

    this.sort();
  }

  deq() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.prio - b.prio);
  }
}

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

  addEdge(vtx1, vtx2, value) {
    this.addVertex(vtx1);
    this.addVertex(vtx2);

    const found1 = this.adjacencyList[vtx1].some(
      item => item.node === vtx2 && item.weight === value
    );

    const found2 = this.adjacencyList[vtx2].some(
      item => item.node === vtx1 && item.weight === value
    );
    if (found1 || found2) {
      return false;
    }

    this.adjacencyList[vtx1].push({
      node: vtx2,
      weight: value,
    });

    this.adjacencyList[vtx2].push({
      node: vtx1,
      weight: value,
    });

    return true;
  }

  removeEdge(vtx1, vtx2) {
    if (!this.adjacencyList[vtx1] || !this.adjacencyList[vtx2]) return false;

    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      item => item.node !== vtx2
    );
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      item => item.node !== vtx1
    );
    return true;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;
    this.adjacencyList[vertex].map(item => this.removeEdge(vertex, item.node));
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
        if (!visited[neighbour.node]) {
          helper(neighbour.node);
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
          stack.push(neighbour.node);
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
          q.push(neighbour.node);
        });
      }
    }
    return result;
  }

  dijkstas(start, finish) {
    const pq = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    // build up initial state
    for (const vtx in this.adjacencyList) {
      if (Object.prototype.hasOwnProperty.call(this.adjacencyList, vtx)) {
        previous[vtx] = null;
        if (vtx === start) {
          distances[vtx] = 0;
          pq.enq(vtx, 0);
        } else {
          distances[vtx] = Infinity;
          pq.enq(vtx, Infinity);
        }
      }
    }

    while (pq.values.length) {
      smallest = pq.deq().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbour of this.adjacencyList[smallest]) {
          // calculate distace from neighbouring node
          const candidate = distances[smallest] + neighbour.weight;
          if (candidate < distances[neighbour.node]) {
            // updating new smallest distace to neighbour
            distances[neighbour.node] = candidate;
            // updating previous - How we got to neighbour
            previous[neighbour.node] = smallest;
            // enqueue in priority queue with new priority
            pq.enq(neighbour.node, candidate);
          }
        }
      }
    }

    return path.concat(start).reverse();
  }
}

const g = new Graph();
g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);
g.dijkstas('A', 'E');
