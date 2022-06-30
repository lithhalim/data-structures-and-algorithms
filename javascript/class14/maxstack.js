class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
  }
  module.exports=class Stack{
    constructor(){
        this.head=null;
        this.size=0;
        this.max=[]
    }
    push(data){
        let node=new Node(data)
        if(this.head==null){
            this.head=node;
            this.size++;
            this.max.push(data)
        }else {
            node.next=this.head;
            this.head=node;
            this.size++
            this.max.push(data)
        }
    }
    pop(){
        if(this.head==null){return}
        else{
            let temp=this.head.data
            this.head=this.head.next;
            this.size--
            this.max.pop(data)
            return temp    
        }
    }
    getmax(){
        return Math.max(...this.max)
    }
    print(){
        let current=this.head;
        let printer=[]
        while(current){
            printer.push(`${current.data}->`)
            current=current.next;
        }
        return console.log(printer)
    }
  }