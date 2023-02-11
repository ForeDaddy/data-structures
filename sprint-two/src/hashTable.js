

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let value = [k, v];
  let bucket = [];
  // if storage index is empty
  if (this._storage.get[index] === undefined) {
    // insert empty array
    this._storage.set(index, bucket);
    this._storage.set(index[0], value);
  } else {
    //set variable for length
    //var bucketLength = this._storage.g
    // this._storage.set(index[])
    // insert at bucket.length
    var bucketLength = this._storage.get(index).length;
    this._storage.set(index[bucketLength], value);
  }
  // console.log('bucket length: ', this._storage.get(index).length);


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log('array: ', this._storage.get(index));
  console.log('array at 0: ', this._storage.get(0));
  if (this._storage.get(index)) {
    return this._storage.get(index)[1];
  }
  // this._storage.get(index).length > 1
  // if (this._storage.get(index).length > 1) {
  //   // this._storage.each(this._storage.retrieve())

  // }


  // console.log('value: ', this._storage.get(index)[0]);
  // console.log('k: ', k);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);

};

var hashTable = new HashTable();
console.log(hashTable);

/*
 * Complexity: What is the time complexity of the above functions?
 */


