var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counts = {firstInLine: 1, lastInLine: 0};
};

Queue.prototype.enqueue = function(value) {
  var nextQueuePosition = this.counts.lastInLine;
  this.storage[nextQueuePosition + 1] = value;
  this.counts.lastInLine++;
}

Queue.prototype.dequeue = function() {
  var frontOfQueue = this.counts.firstInLine;
  var removedFromQueue = this.storage[frontOfQueue];
  delete this.storage[frontOfQueue];
  this.counts.firstInLine++;
  return removedFromQueue;
};

Queue.prototype.size = function() {
  this.counts.countSize = 0
  for (var keys in this.storage) {
    this.counts.countSize++;
  }
  return this.counts.countSize;
}


