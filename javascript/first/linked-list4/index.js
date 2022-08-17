

class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class LinkedList {    
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    addLast(data){
        let node =new Node(data)
        if(this.head===null){
            this.head=node;
            this.tail=node;
        }
        else{
            let node=new Node(data);
            this.tail.next=node;
            this.tail=node;    
        }
        this.size++
    }
    //print the list
    print(){
        let current=this.head;
        let printer=[]
        while(current){
            printer.push(`${current.data}->`)
            current=current.next;
        }
        return printer;
    }
    merge(list,list1){
        let current=list;
        let current2=list1;
        let list3=new LinkedList()
        let route=0
        while(current&&current2){
            if(route%2==0){
                list3.addLast(current.data)
                current=current.next  
                route++  
            }
            else {
                list3.addLast(current2.data)
                current2=current2.next 
                route++   
            }
        }
        while(current){
            list3.addLast(current.data)
            current=current.next
        }
        while(current2){
            list3.addLast(current2.data)
            current2=current2.next

        }
        return list3.print()
    }
   
}



module.exports=LinkedList