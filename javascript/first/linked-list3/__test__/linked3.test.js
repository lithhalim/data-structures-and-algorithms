'use strict';

// Require our linked list implementation
const LinkedLilst = require('../../linked-list3/index');

describe('Where k is greater than the length of the linked list', () => {
  test("create a linked list",()=>{
    let list=new LinkedLilst();
    list.addFirst(1);
    list.addFirst(5);
    list.addFirst(6);
    expect(list.lastkth(10)).toEqual("Exception");
  })
  test ("Where k and the length of the list are the same",()=>{
    let list=new LinkedLilst();
    list.addFirst(1);
    list.addFirst(5);
    list.addFirst(6);
    expect(list.lastkth(2)).toEqual(6);
  })
  test ("Where k is not a positive integer",()=>{
    let list=new LinkedLilst()
    list.addFirst(1);
    list.addFirst(5);
    list.addFirst(6);
    expect(list.lastkth(-3)).toEqual("K IN NEGATIVE");
  })

  test ("Where the linked list is of a size 1",()=>{
    let list=new LinkedLilst()
    list.addFirst(1);
    expect(list.lastkth(0)).toEqual(1);

  })
  test ("Happy Path” where k is not at the end, but somewhere in the middle of the linked list",()=>{
    let list=new LinkedLilst()
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(4);
    list.addFirst(7);
    list.addFirst(3);
    list.addFirst(4);
    expect(list.lastkth(2)).toEqual(4);

  })
  
});
