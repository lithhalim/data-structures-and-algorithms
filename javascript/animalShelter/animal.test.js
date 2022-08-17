const Queue=require("./animalShelter")

describe('use the linked list for shilter', () => {
    test('Can Add Cat To The  Shilter', () => {
        let newQueue=new Queue() 
        newQueue.AddAnimalShelter("cat")
        newQueue.AddAnimalShelter("cat")
        expect(newQueue.print()).toEqual(["cat->", "cat->"])
    })
    test('Can Add Dog To Linked List', () => {
        let newQueue=new Queue() 
        newQueue.AddAnimalShelter("dog")
        newQueue.AddAnimalShelter("dog")
        expect(newQueue.print()).toEqual(["dog->", "dog->"])
    })
    test('can add Dog Cat', () => { 
        let newQueue=new Queue()
        newQueue.AddAnimalShelter("dog")
        newQueue.AddAnimalShelter("dog")
        newQueue.AddAnimalShelter("cat")
        expect(newQueue.print()).toEqual(["dog->", "dog->", "cat->"])
    })
    test('add another type', () => { 
        let newQueue=new Queue()
        newQueue.AddAnimalShelter("cat")
        newQueue.AddAnimalShelter("sposo")
        newQueue.AddAnimalShelter("sksk")
        newQueue.AddAnimalShelter("sksk")
        expect(newQueue.print()).toEqual(["cat->"])
    })
    test('can remove dog from last', () => { 
        let newQueue=new Queue()
        newQueue.AddAnimalShelter("cat")
        newQueue.AddAnimalShelter("cat")
        newQueue.AddAnimalShelter("dog")
        newQueue.AddAnimalShelter("dog")
        newQueue.removeAnimalShilter("dog")
        expect(newQueue.print()).toEqual(["cat->", "cat->", "dog->"])
     })
    test('can remove dog and cat from last', () => { 
        let newQueue=new Queue()
        newQueue.AddAnimalShelter("cat")
        newQueue.AddAnimalShelter("cat")
        newQueue.AddAnimalShelter("dog")
        newQueue.AddAnimalShelter("dog")
        newQueue.removeAnimalShilter("cat")
        expect(newQueue.print()).toEqual(["cat->", "dog->", "dog->"])
     })
    
});
