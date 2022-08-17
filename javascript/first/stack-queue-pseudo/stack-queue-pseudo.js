const Stack=require("./stack")

module.exports= class Queue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
        this.size = 0;
    }

    enqueue(val) {
        this.pushStack.push(val);
        this.size = this.pushStack.length + this.popStack.length;
        
    }

    dequeue() {
        if (this.popStack.length > 0) {
            this.size = this.pushStack.length + this.popStack.length - 1;
            return this.popStack.pop();
        }
        while(this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop())
        }
        this.size = this.pushStack.length + this.popStack.length - 1;
        return this.popStack.pop();
    }
    peek(){
        if(this.pushStack.length>0){
            return this.pushStack.peek()
        }else{
            return this.popStack.peek()
        }
    }
}


