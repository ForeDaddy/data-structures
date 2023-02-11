

// Instantiate a new graph
var Graph = function() {

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create object in g
  return this[node] = {
    value: node,
    edges: {}
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // pass in node
    // if not undefined
    if (this[node]) {
      // return true
      return true;
    } else {
      return false;
    }

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //if node has edges
    //do edges stuff
  if (this[node].edges) {
      // iterate through edges, for/in loop
    for (var key in this[node].edges) {
      // var currentNode
      // execute removeEdge(node, )
      let edgeNode = this[node].edges[key];
      // this.removeEdge(node, edgeNode);
      delete edgeNode.edges[node];
    }
  }
  //delete node
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {


  // check fromNode and see if has edges to toNode, if so
  if (this[fromNode].edges[toNode]) {
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // go to fromNode.edges

  this[fromNode].edges[toNode] = this[toNode];
    // add this.toNode
  // go to toNode.edges
  this[toNode].edges[fromNode] = this[fromNode];
    // add this.fromNode

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // remove reference from fromNode
  // go into fromNode -- > edges [toNode], delete
  delete this[fromNode].edges[toNode];
  delete this[toNode].edges[fromNode];
  // remove ref from toNOde
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over Graph
    // execute cb on each node
  // _.each(this, function (node, key, collection) {
  //   cb.apply(this, arguments);
  // });

  let graph = this;
  for (var keys in graph) {
    if (graph[keys].value) {
      cb(Number(keys));
    }
  }



};



/*
 * Complexity: What is the time complexity of the above functions?
 */


