class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports=class Stack{
    constructor(){
        this.top = null;
        this.length=0
    }
    push(value){
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++
    }
    pop(){
        if(this.top === null){
            return null;
        }
        let temp = this.top;
        this.top = this.top.next;
        this.length--
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