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
        const hash = this.makeHash(key.toLowerCase());
        //create empty object to insert the key and value
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        //[key] to can insert key with ununiform style
        this.map[hash].append({ [key]: value });
    }

    getRepeatsElement(){
        let elemet=[]
        this.map.forEach((a)=>{
            let current=a.head;
            while(current){
                elemet.push(Object.keys(current.value)[0])
                current=current.next;
            }
        })

        const set = new Set(elemet);

        const duplicates = elemet.filter(item => {
            if (set.has(item)) {
                set.delete(item);
            } else {
                return item;
            }
        });

        return console.log(duplicates)
    }

}

const myhashmap = new Hashmap(5);
myhashmap.add('lithh', '545454');
myhashmap.add('ahmed', '545454');
myhashmap.add('khalid', '412');
myhashmap.add('sara', '8787');
myhashmap.add('lithh', '545454');
myhashmap.add('khalid', '412');



myhashmap.getRepeatsElement()