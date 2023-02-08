var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //I: value
    //O: none, side effect var storage changed
    //C: no arrays
    //E: ?

    //add value to top of stack
    //this will allow the last value added to the stack to be found at the top
    //using the key '1' for bottom of stack with the size function will allow for correct assignment of pushed val keys
    var topStack = someInstance.size(storage);
    storage[topStack + 1] = value;

  };

  someInstance.pop = function() {
    var stackSize = someInstance.size();
    var result = storage[stackSize];
    delete storage[stackSize];
    return result;

  };

  someInstance.size = function() {
    //create count and iterate through keys
    var count = 0;
    for (var keys in storage) {
      count++;
    }
    return count;
      //increment count
    //return count
  };

  return someInstance;
};
