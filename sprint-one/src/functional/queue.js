var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextInLine = 1;
  var endOfLine = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add value to storage

    storage[endOfLine + 1] = value;
    endOfLine++;

  };

  someInstance.dequeue = function() {
    var dequeuedValue = storage[nextInLine];

    delete storage[nextInLine];
    nextInLine++;
    return dequeuedValue;
  };

  someInstance.size = function() {
    var count = 0;
    for (var keys in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};
