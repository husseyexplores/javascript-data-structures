// Creates a stack

var Stack = function () {
  this.count = 0;
  this.storage = {};

  // Add a value to the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  //Remove a value from the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function () {
    return this.count;
  }

  // Returns the value at the end of the stack (last pushed)
  this.peek = function () {
    return this.storage[this.count - 1];
  }

};

// Example Usage

var myStack = new Stack();
myStack.push('Hi - 1');
myStack.push('Hi - 2');
myStack.push('Hi - 3');

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());