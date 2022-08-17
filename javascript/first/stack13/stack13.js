class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}


module.exports= class Stack{
    constructor(){
        this.head=null;
        this.size=0;
    }
    push(data){
        let node=new Node(data);
        if(this.head==null){
            this.head=node;
            this.size++
        }
        else {
            node.next=this.head;
            this.head=node;
            this.size++
        }
    }
    pop(){
        if(this.head==null){
            return null
        }
        else {
            let temp=this.head.data
            this.head=this.head.next
            this.size--
            return temp
        }
    }
    print(){
        let curent=this.head;
        let prenter=[]
        while(curent){
            prenter.push(`${curent.data}->`)
            curent=curent.next;
        }
        return console.log(prenter)
    }

    brackets(string){
        string=string.split("")
        let list1=new Stack()
        if(string.length<2){return false}
        if(string.includes("]")||string.includes("}")||string.includes("]")){
    
        for(let i=0;i<string.length;i++){
            if(string[i]=="["||string[i]=="{"||string[i]=="("){
                list1.push(string[i])
            }
            if(string[i]=="]"||string[i]=="}"||string[i]==")"){
                if(string[i]=="}"){
                    if(list1.pop()!=="{"){return false}

                }
                if(string[i]==")"){
                    if(list1.pop()!=="("){return false}

                }
                if(string[i]=="]"){
                    if(list1.pop()!=="["){return false}

                }
            }

        }
        return true
    }
    return false
    }
}