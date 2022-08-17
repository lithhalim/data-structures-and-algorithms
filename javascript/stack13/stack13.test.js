const stack=require("./stack13")

describe('stack brackets check', () => {
    test('check secuful bracktes', () => {
        let bracktes=new stack();
        expect(bracktes.brackets("[{}]")).toEqual(true);
         
     })
    test('check wrong bracktes', () => { 
        let bracktes=new stack();
        expect(bracktes.brackets("[}]")).toEqual(false);
     })
     test('check one bracktes', () => { 
        let bracktes=new stack();
        expect(bracktes.brackets("[]")).toEqual(true);
    })
    test('checkone', () => { 
        let bracktes=new stack();
        expect(bracktes.brackets("]")).toEqual(false);
    })
    test('one brackets just', () => { 
        let bracktes=new stack();
        expect(bracktes.brackets("[[[")).toEqual(false);

     })
     test('multible brackets', () => { 
        let bracktes=new stack();
        expect(bracktes.brackets("[{}][{}][[[]]]")).toEqual(true);
      })
    test('multible brackets', () => { 
        let bracktes=new stack();
        expect(bracktes.brackets("[{}]")).toEqual(true);
     })

});
