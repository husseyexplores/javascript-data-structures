class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const val = key[i].charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + val) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    const newArr = [key, val];
    const idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push(newArr);
    return true;
  }

  get(key) {
    const idx = this._hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) return this.keyMap[idx][i][1];
      }
    }
    return undefined;
  }

  keys() {
    const allKeys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!allKeys.includes(this.keyMap[i][j][0])) {
            allKeys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return allKeys;
  }

  values() {
    const allValues = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!allValues.includes(this.keyMap[i][j][1])) {
            allValues.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return allValues;
  }
}

const ht = new HashTable(13);
ht.set('pink', '#pink');
ht.set('cyan', '#cyan');
ht.set('red', '#red');
ht.set('redDup', '#red');
ht.set('redDup2', '#red');
ht.set('black', '#black');
ht.set('black', '#blackDup');
