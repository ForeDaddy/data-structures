var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

//prototype function for push
stackMethods.push = function(value) {
  var topOfStack = this.size(this.storage);
  this.storage[topOfStack + 1] = value;

}

//prototype function for pop
  //return value
  stackMethods.pop = function() {
    var topOfStackLocation = this.size(this.storage);
    var stackReturnValue = this.storage[topOfStackLocation];
    delete this.storage[topOfStackLocation];
    return stackReturnValue;
  }

//prototype function for size
  //return value
stackMethods.size = function() {
  var count = 0;
  for (var keys in this.storage) {
    count++;
  }
  return count;
}


