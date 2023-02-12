var BinarySearchTree = function(value) {
  var object = Object.create(BinarySearchTree.instance);

  // value
  object.value = value;
  // left
  object.left = null;
  // right
  object.right = null;

  return object;
};
///some.prototype.something
BinarySearchTree.instance = {};


BinarySearchTree.instance.insert = function(value) {
 //compare value to object.value

  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (this.right === null) {
    this.right = BinarySearchTree(value);
  } else {
    this.right.insert(value);
  }
  }
};

BinarySearchTree.instance.contains = function(value) {

  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
    return this.left.contains(value);
    }
  }
  if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
    return this.right.contains(value);
    }
  }
};

BinarySearchTree.instance.depthFirstLog = function(cb) {
  //base case
  cb(this.value);
  //if chain left
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  //if chain right
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
