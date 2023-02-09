class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counts = {firstInLine: 1, lastInLine: 0}
  }

  enqueue(value) {
    var nextQueuePosition = this.counts.lastInLine;
    this.storage[nextQueuePosition + 1] = value;
    this.counts.lastInLine++;
  }

  dequeue() {
    var frontOfQueue = this.counts.firstInLine;
    var removedFromQueue = this.storage[frontOfQueue];
    delete this.storage[frontOfQueue];
    this.counts.firstInLine++
    return removedFromQueue;
  }

  size() {
    var count = 0;
    for (var keys in this.storage) {
      count++;
    }
    return count;
  }


}
