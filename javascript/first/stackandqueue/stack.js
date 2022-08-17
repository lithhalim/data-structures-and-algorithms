
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports=class Stack{
    constructor(){
        this.top = null;
    }
    push(value){
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }
    pop(){
        if(this.top === null){
            return null;
        }
        let temp = this.top;
        this.top = this.top.next;
        return temp.value;
    }
    peek(){
        if(this.top === null){
            return null;
        }
        return this.top.value;
    }   
    isEmpty(){
        return this.top === null;
    }
}