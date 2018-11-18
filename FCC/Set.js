// Sets -> similar to arrays - to duplicate items - no particular order

function MySet() {
  // this will hold the set
  const collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return collection.indexOf(element) !== 1;
  };

  // this method will return all values in the set
  this.values = function() {
    return collection;
  };

  // this method will add an element to the set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this will remove an element from a set - In ES6 remove == delete
  this.remove = function(element) {
    if (this.has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1); // take out 1 element the starting from the defined index
      return true;
    }
    return false;
  };

  // In ES6 - size is a property
  this.size = function() {
    return collection.length;
  };

  // this method will return the union of two sets
  this.union = function(otherSet) {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach(e => {
      unionSet.add(e);
    });

    secondSet.forEach(e => {
      unionSet.add(e);
    });

    return unionSet;
  };

  // this method will return the intersection of two sets as a new set;
  this.intersection = function(otherSet) {
    const interSectionSet = new MySet();
    const firstSet = this.values();

    firstSet.forEach(e => {
      if (otherSet.has(e)) {
        interSectionSet.add(e);
      }
    });

    return interSectionSet;
  };

  // this method will return the difference of two sets as a new set
  this.difference = function(otherSet) {
    const differenceSet = new MySet();
    const firstSet = this.values();

    firstSet.forEach(e => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  };

  // this method will test if the set is a subset of a different set
  this.subset = function(otherSet) {
    const firstSet = this.values();
    return firstSet.every(value => otherSet.has(value));
  };
}

// Examples uses of a Set
const SetA = new MySet();
const SetB = new MySet();

setA.add('a');
setA.add('b');

setB.add('a');
setB.add('b');
setB.add('c');
setB.add('d');
setB.add('e');

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
