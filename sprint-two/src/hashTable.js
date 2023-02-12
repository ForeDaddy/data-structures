

var HashTable = function() {
  this._limit = 8;
  this._tupleCount = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let value = [k, v];


  // if storage index is empty
  if (this._storage.get(index) === undefined) {

    let bucket = [];
    // insert empty array
    this._storage.set(index, bucket);
    // this._storage.set(index[0], value);
    // use get to grab bucket
    this._storage.get(index).push(value);

  } else {
    // if bucket length is greater than 1

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
  this._tupleCount++;
  this.doubleHash();
  // console.log('tuple count: ', this._tupleCount);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index)) {
    var bucket = this._storage.get(index);

    // check if bucket:this._storage.get(index) is longer than 1
    if (bucket.length > 1) {
      var length = bucket.length;
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
  this._tupleCount--;
  this.halveHash();
};


HashTable.prototype.doubleHash = function() {
  // is tupleCount more than 75% limit
  if (this._tupleCount > (Math.floor(.75 * this._limit))) {
    // console.log('more than ', Math.floor(.75 * this._limit));
    this.increaseSize();
  }
    // run increaseSize

};
HashTable.prototype.halveHash = function() {
  // is tupleCount less than 25% limit
  if (this._tupleCount < (Math.floor(.25 * this._limit))) {
    // console.log('less than ', Math.floor(.25 * this._limit));
    this.decreaseSize();
  }
}
    // run decreaseSize

HashTable.prototype.increaseSize = function() {
  // double limit
  var newStorage = LimitedArray(this._limit*2);
  var tempTupleArray = [];
  // iterate through this._storage
  for (let i = 0; i < this._limit; i++) {
    // if bucket
    let bucket = this._storage.get(i);
    if (bucket) {
      // iterate through each bucket index
      for (let i = 0; i < bucket.length; i++) {
        // for each item, push to storage array
        tempTupleArray.push(bucket[i]);
      }
    }
  }

  this._storage = newStorage;
  this._limit = this._limit*2;
  this._tupleCount = 0;

  // iterate through tuple array
  for (let i = 0; i < tempTupleArray.length; i++) {
    // run the .insert function against tuple k, v
    let tupleKey = tempTupleArray[i][0];
    let tupleValue = tempTupleArray[i][1];
    this.insert(tupleKey, tupleValue);
  }

};

HashTable.prototype.decreaseSize = function() {
// iterate through this._storage
  var newStorage = LimitedArray(Math.floor(this._limit/2));
  var tempTupleArray = [];
  // iterate through this._storage
  for (let i = 0; i < this._limit; i++) {
    // if bucket
    let bucket = this._storage.get(i);
    if (bucket) {
      // iterate through each bucket index
      for (let i = 0; i < bucket.length; i++) {
        // for each item, push to storage array
        tempTupleArray.push(bucket[i]);
      }
    }
  }

  this._storage = newStorage;
  this._limit = Math.floor(this._limit/2);
  console.log('limit: ', this._limit);
  this._tupleCount = 0;

  // iterate through tuple array
  for (let i = 0; i < tempTupleArray.length; i++) {
    // run the .insert function against tuple k, v
    let tupleKey = tempTupleArray[i][0];
    let tupleValue = tempTupleArray[i][1];
    this.insert(tupleKey, tupleValue);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// .insert() = is O(1) when ignoring the functions called inside of .insert, O(n) when considering
              // the time complexity of the functions called inside of .insert
// .retreive() = O(1)
// .remove() =
// .doubleHash() =
// .halveHash() =
// .increaseSize() =
// .decreaseSize() =

