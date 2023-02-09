class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var topOfStack = this.size(this.storage);
    this.storage[topOfStack + 1] = value;

  }

  pop() {
    var topOfStack = this.size(this.storage);
    var removedFromStack = this.storage[topOfStack];
    delete this.storage[topOfStack];
    return removedFromStack;

  }

  size() {
    var count = 0;
    for (var keys in this.storage) {
      count++
    }
    return count;
  }

}