

class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }

}
 class LinkedList{
    constructor(){
        this.tail=null;
        this.head=null;
        this.size=0;
    }
    //add to the first
    addFirst(data){
        if(this.head===null){
            this.head=new Node(data);
            this.tail=new Node(data);
        }else{
            this.head=new Node(data,this.head);
            this.size++    

        }
    }
    //print linked list
    print(){
        let current=this.head;
        let sum=[]
        while(current){
            sum.push(`${current.data}->`)
            current=current.next;
        }
        return sum
    }
    //find lat kth number
    lastkth(k){
        if(k>this.size){
            return "Exception"
        }
        if(k<0){
            return"K IN NEGATIVE"
        }
        else{
            let place=this.size-k
            let current=this.head;
            let counter=0
            while(current){
                if(place==counter){
                    return(current.data)
                }
                counter++
                current=current.next;
            }    
        }
    }


    
}



module.exports = LinkedList;
