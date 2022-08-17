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
        this.size=0;
        this.cats=[];
        this.dogs=[];
    }

    enque(value){
        let node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
            this.size++
        }
        else{
            this.last.next = node;
            this.last = node;
            this.size++
        }
    }
    dequeu(){
        if(!this.first){
            return null;
        }
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
    deleteIndex(index){
        let current=this.first;
        let rout=0;
        let previos=null;
        while(current){
            if(index==rout){
                this.size--
               return previos.next=previos.next.next
            }
            rout++;
            previos=current;
            current=current.next;
        }
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
    print(){
        let current=this.first;
        let printer=[]
        while(current){
            while(current){
                printer.push(`${current.value}->`)
            current=current.next;}
        }
        return printer
    }

    AddAnimalShelter(animal){
        animal=animal.toLowerCase();
        if(animal=="cat"){
            this.enque(animal);
            this.cats.push(this.size)
        }
        else if(animal=="dog"){
            this.enque(animal);
            this.dogs.push(this.size)
        }
        else {
            return "Cant Add These Type Animal"
        }
    }
    removeAnimalShilter(pref){
        pref=pref.toLowerCase(); 
        if(pref=="cat"){
            if(this.cats.length==1){
                let val=this.cats.pop()
                if(val>1){
                    this.deleteIndex(val)
                    this.cats=[]
                }
                else {
                    this.first=this.first.next;
                    this.cats=[]
                }
            }
            else if(this.cats.length<1){
                return "YOU DONT HAVE ANY CATS"
            }

            this.deleteIndex(this.cats.pop()-1)
        }
        else if(pref=="dog"){
            if(this.dogs.length==1){
                let val=this.dogs.pop()
                if(val>1){
                    this.deleteIndex(val)
                    this.dogs=[]
                }
                else {
                    this.first=this.first.next;
                    this.dogs=[]
                }
            }

            else if(this.dogs.length<1){
                return "YOU DONT HAVE ANY DOG"
            }
            this.deleteIndex(this.dogs.pop()-1)
        }
        else {
            return null           
    }
}


}

