class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertBeforIndex(index, data){
        if(index < 0 || index > this.size){ return false;}
        let node = new Node(data);
        if(index == 0){
            node.next = this.head;
            this.head = node;
                }else{
                    let current = this.head;
                    let previous;
                    let count = 0;
                    while(count < index){
                        previous = current;
                        current = current.next;
                        count++;
                    }
                    node.next = current;
                    previous.next = node;
                }
                this.size++;
        }
        inserAfterIndex(index, data){
            if(index < 0 || index > this.size){return false;}
            let node = new Node(data);
            if(index == this.size){
                    let current = this.head;
                    while(current.next){
                        current = current.next;
                    }
                    current.next = node;
                }else{  
                    let current = this.head;    
                    let previous;
                    let count = 0;
                    while(count < index){
                        previous = current;
                        current = current.next;    
                        count++;
                    }
                    node.next = current.next;
                    current.next = node;
                }
                this.size++;
            }
        
        AddAtTheLast(data){   
            let node = new Node(data);
            if(!this.head){
                this.head = node;
            }else{
                let current = this.head;
                while(current.next){
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        }
        insert(value){
            let node=new Node(value);
            if(this.head == null){
                this.head = node;
                this.tail = node;
            }
            else{
                this.tail.next = node;
                this.tail = node;
                 }
            this.length++;
        }    
        print(){
            let current = this.head;
            let print=[]
            while(current){
                print.push(`${current.data}->`);
                current = current.next;
            }
           return print.join("")
        }
}




module.exports = LinkedList;
