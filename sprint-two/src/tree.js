var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create new node contains value prop and children prop
  var createNode = function (value) {
    var node = {
      value: value,
      children: [],
      addChild: treeMethods.addChild,
      contains: treeMethods.contains

    };

    return node;
  }

  this.children.push(createNode(value));
  // console.log('new child added: ', createNode(value));
  //arraymethod added

};

treeMethods.contains = function(target) {
  //if  value === target
  var returnBool = false;

  var innerFunction = function (target, node) {
    // console.log('target: ', target);
    // console.log('node.value: ', node.value);
    // console.log('node: ', node);
    if (node.value === target) {
      // return true;
      returnBool = true;
      return;
    }
    // console.log('see node children: ', node.children);
    if (node.children.length > 0) {
      // iterate through array
      for (var i = 0; i < node.children.length; i++) {
        // execute function again
        innerFunction(target, node.children[i]);
      }

    }
    // return false;
  }
  innerFunction(target, this);

  // if node.children.length
return returnBool;
  // else
    // return false

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
