const Stack=require("./stack")

describe('stack check', () => {
    test('Can successfully push onto a stack', () => {
        let newStack=new Stack();
        newStack.push(5)
        expect(newStack.peek()).toEqual(5);
         
     })
    test('Can successfully push multiple values onto a stack', () => { 
        let newStack=new Stack();
        newStack.push(6)
        newStack.push(5)
        newStack.push(4)
        expect(newStack.peek()).toEqual(4);
     })
     test('Can successfully pop off the stack', () => { 
        let newStack=new Stack();
        newStack.push(6)
        newStack.push(6)
        newStack.pop()
        expect(newStack.peek()).toEqual(6);
    })
    test('Can successfully empty a stack after multiple pops', () => { 
        let newStack=new Stack();
        newStack.push(6)
        newStack.push(7)
        newStack.pop()
        newStack.pop()
        newStack.pop()
        expect(newStack.peek()).toEqual(null);
    })
    test('Can successfully peek the next item on the stack', () => { 
        let newStack=new Stack();
        newStack.push(6);
        expect(newStack.peek()).toEqual(6);

     })
     test('Can successfully instantiate an empty stack', () => { 
        let newStack=new Stack();
        expect(newStack.peek()).toEqual(null)
      })
    test('Calling pop or peek on empty stack raises exception', () => { 
        let newStack=new Stack();
        newStack.push(5)
        newStack.push(6)
        newStack.pop()
        newStack.pop()
        newStack.pop()
        expect(newStack.peek()).toEqual(null);
     })

});
