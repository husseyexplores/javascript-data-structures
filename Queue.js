/* Queues  */

function Queue() {
  collection = [];

  this.print = function () {
    console.log(collection);
  }

  this.enqueue = function (element) {
    collection.push(element);
  }

  this.dequeue = function () {
    return collection.shift();
  }

}