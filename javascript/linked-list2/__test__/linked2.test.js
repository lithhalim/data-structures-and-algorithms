'use strict';

// Require our linked list implementation
const LinkedLilst = require('../../linked-list2/index');

describe('Can successfully instantiate an empty linked list', () => {
  test("create a linked list",()=>{
    let list=new LinkedLilst();
    expect(list.head).toBeNull();
  })
  test ("Can properly insert into the linked list",()=>{
    let list=new LinkedLilst()
    list.AddAtTheLast("lith");
    list.AddAtTheLast("khaled");
    expect(list.head.data).toEqual('lith')
  })
  test ("Can successfully insert a node before a node located i the middle of a linked list",()=>{
    let list=new LinkedLilst()
    list.AddAtTheLast(1);
    list.AddAtTheLast(2);
    list.AddAtTheLast(3);
    list.AddAtTheLast(4);
    list.AddAtTheLast(5);
    list.AddAtTheLast(6);
    list.insertBeforIndex(2,1000)
    expect(list.print()).toEqual("1->2->1000->3->4->5->6->")
  })

  test ("Can successfully insert a node before the first node of a linked list",()=>{
    let list=new LinkedLilst()
    list.AddAtTheLast(1);
    list.AddAtTheLast(2);
    list.AddAtTheLast(3);
    list.AddAtTheLast(4);
    list.AddAtTheLast(5);
    list.AddAtTheLast(6);
    list.insertBeforIndex(0,1000)
    expect(list.print()).toEqual("1000->1->2->3->4->5->6->")
  })
  test ("Can successfully insert after a node in the middle of the linked list",()=>{
    let list=new  LinkedLilst()
    list.AddAtTheLast(1);
    list.AddAtTheLast(2);
    list.AddAtTheLast(3);
    list.AddAtTheLast(4);
    list.AddAtTheLast(5);
    list.AddAtTheLast(6);
    list.inserAfterIndex(2,1000)
    expect(list.print()).toEqual("1->2->3->1000->4->5->6->")
  })
  test ("Can successfully insert a node after the last node of the linked list",()=>{
    let list=new LinkedLilst()
    list.AddAtTheLast(1);
    list.AddAtTheLast(2);
    list.AddAtTheLast(3);
    list.AddAtTheLast(4);
    list.AddAtTheLast(5);
    list.AddAtTheLast(6);
    list.inserAfterIndex(5,1000)
    expect(list.print()).toEqual("1->2->3->4->5->6->1000->")
  })

  
});
