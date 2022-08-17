'use strict';
const Node=require("./node")
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addToFirst(data){
        this.head=new Node(data,this.head)
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

    printAllNode(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }       
    }  
    createTheIncludesFunction(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
   
    }
    createToStringFunction(){
        let current = this.head;
        let theString = "";
        while(current){
            theString += current.value + " -> ";
            current = current.next;
        }
        return theString;
    }

}

let live=new LinkedList();

live.printAllNode();

module.exports = LinkedList;
