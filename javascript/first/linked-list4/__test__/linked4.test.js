'use strict';

// Require our linked list implementation
const LinkedLilst = require('../../linked-list4/index');

describe('Where k is greater than the length of the linked list', () => {
  test ("when the two linked list is empty",()=>{
    let list=new LinkedLilst();
    let list1=new LinkedLilst()
    expect(list1.merge(list.head,list1.head)).toEqual([]);
  })

  test ("check to linked list equal length and have nigateve number",()=>{
    let list=new LinkedLilst();
    list.addLast(1);
    list.addLast(5);
    list.addLast(6);
    let list1=new LinkedLilst()
    list1.addLast(8);
    list1.addLast(5);
    list1.addLast(10);
    expect(list1.merge(list.head,list1.head)).toEqual(["1->", "8->", "5->", "5->", "6->", "10->"]);
  })

  test ("check to linked list equal length",()=>{
    let list=new LinkedLilst();
    list.addLast(1);
    list.addLast(5);
    list.addLast(6);
    let list1=new LinkedLilst()
    list1.addLast(8);
    list1.addLast(5);
    list1.addLast(10);
    expect(list1.merge(list.head,list1.head)).toEqual(["1->", "8->", "5->", "5->", "6->", "10->"]);
  })
  test ("check when the two linked list not in same length",()=>{
    let list=new LinkedLilst();
    list.addLast(1);
    list.addLast(5);
    list.addLast(6);
    let list1=new LinkedLilst()
    list1.addLast(8);
    list1.addLast(5);
    expect(list1.merge(list.head,list1.head)).toEqual( ["1->", "8->", "5->", "5->", "6->"]);
  })

  test ("when one of two linked list empty",()=>{
    let list=new LinkedLilst();
    list.addLast(1);
    list.addLast(5);
    list.addLast(6);
    let list1=new LinkedLilst()
    expect(list1.merge(list.head,list1.head)).toEqual(["1->", "5->", "6->"]);
  })
  
});
