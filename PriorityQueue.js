/* Priority Queues  */

function PriorityQueue() {
  collection = [];

  this.print = function () {
    console.log(collection);
  }

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      let added = false;

      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) { // checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) {
        collection.push(element);
      }
    }
  }

  this.dequeue = function () {
    return collection.shift()[0];
  }

  this.front = function () {
    return collection[0];
  }

  this.size = function () {
    return collection.length;
  }

  this.isEmpty = function () {
    return (collection.lengtn === 0);
  }
}

// Examples

const pq = new PriorityQueue();
pq.enqueue(['Dog', 2]);
pq.enqueue(['Cat', 3]);
pq.enqueue(['Cow', 1]);
pq.print();
pq.dequeue();
console.log(pq.front());
pq.print();