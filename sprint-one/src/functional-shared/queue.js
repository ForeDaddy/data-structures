var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counts = {firstInLine: 1, lastInLine: 0};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var nextQueuePosition = this.counts.lastInLine;
  this.storage[nextQueuePosition + 1] = value;
  this.counts.lastInLine++;
}

queueMethods.dequeue = function() {
  var firstQueuePosition = this.counts.firstInLine;
  var removedFromQueue = this.storage[firstQueuePosition];
  delete this.storage[firstQueuePosition];
  this.counts.firstInLine++;
  return removedFromQueue;
}

queueMethods.size = function() {
  this.counts.countSize = 0;
  for (var keys in this.storage) {
    this.counts.countSize++;
  }
  return this.counts.countSize;
}


