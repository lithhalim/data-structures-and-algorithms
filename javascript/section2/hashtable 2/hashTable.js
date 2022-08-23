class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    // returning the all the values  from the linkedList
    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class Hashmap {
    constructor(size) {
        //specific the size Of the array
        this.size = size;
        //create Array with the specific array size
        this.map = new Array(size);
    }
    //create the hashing for the key
    makeHash(key) {
        //use ascii --->lith-->11+15+20+10-->the summation for key string
        const asciicodeSum = key.split("").reduce((acc, cur) => {
            return acc + cur.charCodeAt(0);
        }, 0);
        //multible the summation ascii with primery key
        const multiPrime = asciicodeSum * 599;
        //get the module is the index create
        const theIndex = multiPrime % this.size;
        return theIndex;
    }
    add(key, value) {
        //add elemnt first hash key to insert the elemnt in specific index
        const hash = this.makeHash(key);
        //create empty object to insert the key and value
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        //[key] to can insert key with ununiform style
        this.map[hash].append({ [key]: value });
    }

    
    getRepeat(){
        let dataUse=[]
        this.map.forEach((a)=>{
            if(a.head.next!==null){
                let current=a.head;

                let DataFilter=[]
                while(current){
                    DataFilter.push(Object.keys(current.value)[0])
                    current=current.next;
                }
                let nextStage=[]
                let TheDublicate=[]
                DataFilter.forEach((a)=>{
                    if(nextStage.includes(a)){
                        TheDublicate.push(a)
                    }
                    nextStage.push(a)
                })
                
                dataUse.push(TheDublicate)
            }
        })


        return console.log(dataUse)
        
    }
}

const myhashmap = new Hashmap(100);



let search=data.split(" ");
search.forEach((Data)=>{
    myhashmap.add(Data,'1');
})



myhashmap.getRepeat()