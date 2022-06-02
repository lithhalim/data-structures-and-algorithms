'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

describe('Can successfully instantiate an empty linked list', () => {
  test("create a linked list",()=>{
    let list=new LinkedLilst();
    expect(list.head).toBeNull();
  })
  test ("Can properly insert into the linked list",()=>{
    let list=new LinkedLilst()
    list.insert("lith");
    expect(list.head.value).toEqual('lith')
  })
  test ("The head property will properly point to the first node in the linked list",()=>{
    let list=new LinkedLilst()
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.head.value).toEqual(1)
  })

  test ("Can properly insert multiple nodes into the linked list",()=>{
    let list=new LinkedLilst()
    list.insert("lith");
    list.insert("lith");
    list.insert("lith");
    list.insert("lith");
    expect(list.length>2).toEqual(true)
  })
  test ("Will return false when searching for a value in the linked list that does not exist",()=>{
    let List=new  LinkedLilst()
    List.insert(27)
    expect(List.createTheIncludesFunction(1)).toEqual(false)
  })
  test ("Will return true when finding a value within the linked list that exists",()=>{
    let List=new  LinkedLilst()
    List.insert(1)
    expect(List.createTheIncludesFunction(1)).toEqual(true)
  })
  test ("Can properly return a collection of all the values that exist in the linked list",()=>{
    let List=new  LinkedLilst()
    List.insert(1)
    List.insert(2)
    List.insert(3)
    expect(List.createToStringFunction()).toEqual("1 -> 2 -> 3 -> ")
  })


  
});
