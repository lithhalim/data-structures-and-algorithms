const Stack=require("./maxstack")

describe('get max', () => {
    test('get max element pop', () => {
        let newStack=new Stack();
        newStack.push(5)
        expect(newStack.getmax()).toEqual(5);
         
     })
    test('get max element push ', () => { 
        let newStack=new Stack();
        newStack.push(6)
        newStack.push(5)
        newStack.push(4)
        expect(newStack.getmax()).toEqual(6);
     })
     test('max element empty', () => { 
        let newStack=new Stack();
        newStack.push(6)
        newStack.push(6)
        expect(newStack.getmax()).toEqual(6);
    })

});
