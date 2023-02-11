

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let value = [k, v];
  console.log('bucket: ', this._storage.get(index));

  // if storage index is empty
  if (this._storage.get(index) === undefined) {
    console.log('current value: ', value);
    let bucket = [];
    // insert empty array
    this._storage.set(index, bucket);
    // this._storage.set(index[0], value);
    // use get to grab bucket
    this._storage.get(index).push(value);

  } else {
    // if bucket length is greater than 1
    console.log('touched insert else statement: ', this._storage.get(index));
    var length = this._storage.get(index).length;
    let bucket = this._storage.get(index);

    for (var i = 0; i < length; i++) {
      var tupleKey = bucket[i][0];
      // if at index 0, k === index 0
      if (k === tupleKey) {
        // return value at k
        bucket[i][1] = v;
      } else {
        //push function
        bucket.push(value);
      }
    }

  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index)) {
    var bucket = this._storage.get(index);

    // check if bucket:this._storage.get(index) is longer than 1
    if (this._storage.get(index).length > 1) {
      var length = this._storage.get(index).length;
      // iterate through bucket
      for (var i = 0; i < length; i++) {
        var tupleKey = bucket[i][0];
        // if at index 0, k === index 0
        if (k === tupleKey) {
          // return value at k
          var value = bucket[i][1];
          return value;
        }
      }
    }

    return bucket[0][1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


