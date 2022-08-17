class Brith {
  constructor(key, value = key, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.root=null
  }

}


class Brith {
  constructor(key, value = key) {
    this.root = new BinaryTreeNode(key, value);
  }

  insert(
      parentNodeKey,
      key,
      value = key,
      { left, right } = { left: true, right: true }
    ) {
      for (let node of this.preOrderTraversal()) {
        if (node.key === parentNodeKey) {
          const canInsertLeft = left && node.left === null;
          const canInsertRight = right && node.right === null;
          if (!canInsertLeft && !canInsertRight) return false;
          if (canInsertLeft) {
            node.left = new BinaryTreeNode(key, value, node);
            return true;
          }
          if (canInsertRight) {
              node.right = new BinaryTreeNode(key, value, node);
              return true;
            }
          }
        }
        return false;
      }
  remove(key) {
          for (let node of this.preOrderTraversal()) {
            if (node.left.key === key) {
              node.left = null;
              return true;
            }
            if (node.right.key === key) {
              node.right = null;
              return true;
            }
          }
          return false;
        }

  Breadth_FirstAlgorithm(value){
    let collection=[this.root]
    while(collection.length){
      let node=collection.shift()
      if(node.data===value){
        return true
      }
      else{
        collection.push(...node.hasChildren)
      }
      return false
    }
  }



      }
                              