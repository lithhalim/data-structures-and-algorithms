var Graph = function() {
  };

  class Graph{
    constructor(node,edges){
        this.nodes = {};
        this.edges = {};    

    }
    addNode = function(node) {
        this.nodes[node] = node;
    };
    removeNode = function(node) {
        if (this.contains(node)) {
          delete this.nodes[node];
        }
    };
    hasEdge = function(fromNode, toNode) {
        for (var key in this.edges) {
          var searchOne = this.edges[key][0] === fromNode && this.edges[key][1] === toNode;
          var searchTwo = this.edges[key][1] === fromNode && this.edges[key][0] === toNode;
          if (searchOne || searchTwo) return true;
        }
        return false;
    };

    bfs(searchValue) {
        let queue = [this.root]
        while(queue.length) {
          let current = queue.shift();
          if (current.data === searchValue) {
            return true;
          } else {
            for (let i = 0; i < current.children.length; i++) {
              queue.push(current.children[i]);
            }
          }
        }
    
        return false;
      }
    
  }
  
