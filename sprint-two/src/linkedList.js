var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create new node
    //list.tail.next ---> new node
    // list.tail = new node
    //create new node
    var newNode = Node(value);
    if (list.tail === null) {
    list.tail = Node(value);
    }
    if (list.head === null) {
      list.head = newNode;
    }


      list.tail.next = newNode;
      list.tail = newNode;

    // var newNode = Node(value)
    // list.tail.next = newNode
    // list.tail = newNode
    //change list.tail to new node


  };

  list.removeHead = function() {
    //check node at list.head
      //if node.next != null
      //list.head = node.next;
    if (!list.head) {
      return null;
    }
    var head = list.head.value;

    list.head = list.head.next;


    return head;
  };

  list.contains = function(target) {
    // target equals value
    // base case
    // if .value equals target
      // return true;

    // recursion case
    // .value equals false
      //

      //inner function
      //innerfunction(.head)
      var innerFunction = function (target, node) {
        if (node.value === target) {
          return true;
        } else if (!node.next) {
          return false;
        } else {
          return innerFunction(target, node.next);
        }
      }
    return innerFunction(target, list.head);
        // iterate through each node
    // start at list.head
    // if node.value equals true
      // result equals true
      // return
    // go to node.next

      // check if target equals current value, if so
        // return true
  // return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
