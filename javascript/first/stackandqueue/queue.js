class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports= class Queue{
    constructor(){
        this.first = null;
        this.last = null;
    }

    enque(value){
        let node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        }
        else{
            this.last.next = node;
            this.last = node;
        }
    }
    dequeu(){
        if(!this.first){
            return null;
        }
        let temp = this.first;
        this.first = this.first.next;
        return temp.value;
    }
    peek(){
        if(!this.first){
            return null;
        }
        return this.first.value;
    }
    isEmpty(){
        return !this.first;
    }
}
