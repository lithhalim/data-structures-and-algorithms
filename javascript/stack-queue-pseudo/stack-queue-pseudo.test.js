const QueueStack=require("./stack-queue-pseudo")

describe('quque stack check', () => {
    test('can enqueue in linkedlist', () => {
        let newQueue=new QueueStack();
        newQueue.enqueue(5)
        expect(newQueue.peek()).toEqual(5);
         
     })
    test('Can successfully enqueue multiple values onto a queuestack', () => { 
        let newQueue=new QueueStack();
        newQueue.enqueue(6)
        newQueue.enqueue(5)
        newQueue.enqueue(4)
        console.log(newQueue.peek())
        expect(newQueue.peek()).toEqual(4);
     })
     test('Can successfully deqieie off the ququstack', () => { 
        let newQueue=new QueueStack();
        newQueue.enqueue(6)
        newQueue.enqueue(6)
        newQueue.dequeue()
        expect(newQueue.peek()).toEqual(6);
    })
    test('Can successfully empty a queuestack after multiple deqwuwu', () => { 
        let newQueue=new QueueStack();
        newQueue.enqueue(6)
        newQueue.enqueue(7)
        newQueue.dequeue()
        newQueue.dequeue()
        newQueue.dequeue()
        expect(newQueue.peek()).toEqual(null);
    })
    test('Can successfully peek the next item on the qeueustack', () => { 
        let newQueue=new QueueStack();
        newQueue.enqueue(6);
        expect(newQueue.peek()).toEqual(6);

     })
     test('Can successfully instantiate an empty qeueustack', () => { 
        let newQueue=new QueueStack();
        expect(newQueue.peek()).toEqual(null)
      })
    test('Calling pop or peek on empty qeyeystack raises exception', () => { 
        let newQueue=new QueueStack();
        newQueue.enqueue(5)
        newQueue.enqueue(6)
        newQueue.dequeue()
        newQueue.dequeue()
        newQueue.dequeue()
        expect(newQueue.peek()).toEqual(null);
     })

});
