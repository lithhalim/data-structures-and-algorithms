class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // add to end of list
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        }
    //PRINT LIST
    printList() {
        let z=[]
        let current = this.head;
        while (current) {
            z.push(`${current.value}->`)
            current = current.next;
        }
        return console.log(z)
    }
    //REVERSE LIST
    reverseList() {
        let current = this.head;
        let prev = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
       return current=prev
    }
    //check linked list palindrome or not
    isPalindrome() {
        let current = this.head;
        let stack = [];
        while (current) {
            stack.push(current.value);
            current = current.next;
        }
        current = this.head;
        while (current) {
            if (current.value !== stack.pop()) {
                return false;
            }
            current = current.next;
        }
        return true;
    }

}



let list =new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(3)
list.append(3)
list.append(2)
list.append(1)

list.printList()
console.log(list.isPalindrome())

console.log(list.reverseList())