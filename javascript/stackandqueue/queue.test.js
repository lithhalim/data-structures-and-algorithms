const Queue=require("../stackandqueue/queue")

describe('check queue for all element', () => {
    test('Can successfully enqueue into a queue', () => {
        let newQueue=new Queue() 
        newQueue.enque(6)
        expect(newQueue.peek()).toEqual(6)

    })
    test('Can successfully enqueue multiple values into a queue', () => {
        let newQueue=new Queue() 
        newQueue.enque(4)
        newQueue.enque(5)
        newQueue.enque(6)
        expect(newQueue.peek()).toEqual(4)
    })
    test('Can successfully dequeue out of a queue the expected value', () => { 
        let newQueue=new Queue()
        newQueue.enque(4)
        newQueue.enque(5)
        newQueue.dequeu()
        expect(newQueue.peek()).toEqual(5)
    })
    test('Can successfully peek into a queue, seeing the expected value', () => { 
        let newQueue=new Queue()
        newQueue.enque(4)
        expect(newQueue.peek()).toEqual(4)
    })
    test('Can successfully empty a queue after multiple dequeues', () => { 
        let newQueue=new Queue()
        newQueue.enque(4)
        newQueue.enque(4)
        newQueue.enque(4)
        newQueue.dequeu()
        newQueue.dequeu()
        newQueue.dequeu()
        newQueue.dequeu()
        expect(newQueue.peek()).toEqual(null)
     })
    test('Can successfully instantiate an empty queue', () => { 
        let newQueue=new Queue()
        expect(newQueue.isEmpty()).toEqual(true)
     })
    test('Calling dequeue or peek on empty queue raises exception', () => { 
        let newQueue=new Queue()
        expect(newQueue.peek()).toEqual(null)
     })

    
    
});
