var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var topOfStack = this.size(this.storage);
  this.storage[topOfStack + 1] = value;
}

Stack.prototype.pop = function() {
  var topOfStack = this.size(this.storage);
  var removedFromStack = this.storage[topOfStack];
  delete this.storage[topOfStack];
  return removedFromStack;

};

Stack.prototype.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
}


