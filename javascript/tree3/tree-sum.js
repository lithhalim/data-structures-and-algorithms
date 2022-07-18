class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }
  
  class BinarySeachTree {
        constructor(){
          this.root = null
        }
    
    insert(value){
        //create New Node To can Instanse from 
          const newNode = new Node(value);

          //1-check if root is empty insert the first node 
          if(this.root === null){
              this.root = newNode;
              //return the all tree by using this -->return the all data in object
              return this;
          }
          //using current to looping on all elemnt
          let current = this.root;
          while(current){
            //if we have the element dont inserte
              if(value === current.value) return undefined;

              //2-if the data is less insert left
              if(value < current.value){
                //if the value current insert and retutn the tree
                  if(current.left === null){
                      current.left = newNode;
                      return this;
                  }
                  //use to looping on the tree
                  current = current.left;
             //3-if the data more than current insert right
              } else {
                  if(current.right === null){
                      current.right = newNode;
                      return this;
                  } 
                  current = current.right;
              }
          }
      }




      sum() {
        let result = 0;
        let traverse = (node) => {
          if (node.left) {
            traverse(node.left);
          }
          if (node.right) {
            traverse(node.right);
          }
          if(node.value%2==0){
            result+=node.value
          }
        }
        traverse(this.root);
        return result;
      }




    
  }

