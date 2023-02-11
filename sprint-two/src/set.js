var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (item !== this._storage[item]) {
    this._storage[JSON.stringify(item)] = item;
console.log('item: ', item);
console.log('this._storage: ', this._storage);
  }
};

setPrototype.contains = function(item) {
  for (var keys in this._storage) {
    if (JSON.stringify(item) === keys) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this._storage[JSON.stringify(item)]) {
    delete this._storage[JSON.stringify(item)];
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
