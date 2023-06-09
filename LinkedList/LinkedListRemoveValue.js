class Node {
  constructor(value){
    this.value= value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }
  isEmpty(){
return this.size === 0
  }
  getSize(){
    return this.size
  }
  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }
  insert(value,index){
    if(index<0 || index>this.size){
      return console.log("Invalid index")
    }
    if(index===0){
      this.prepend(value)
    }else{
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }
  removeFrom(index){
    if(index>0 || index >= this.size){
      return console.log("Invalid index")
    }
    let removeNode
    if(index === 0){
      removeNode = this.head
      this.head = removeNode.next
    }else{
      let prev = this.head
      for(let i = 0;i < index-1;i++){
        prev = prev.next
      }
      removeNode = prev.next
      prev.next = removeNode.next
    }
    this.size--
    return console.log(`removed ${ removeNode.value }`) 
  }
  removeValue(value){
    if(this.isEmpty()){
      return console.log("List is empty")
    }
    if(this.head.value === value){
      this.head = this.head.next
      this.size--
      return console.log(`removed ${value}`) 
    }
    else{
      let prev = this.head
      while(prev.next && prev.next.value !== value){
        prev = prev.next
      }
      if(prev.next){
        let removeNode = prev.next
        prev.next = removeNode.next
        this.size--
        return console.log(`removed ${value}`) 
      }
    }
    return console.log(`No node corresponding to the value`) 
  }
  print(){
    if(this.isEmpty()){
      return console.log("List is empty")
    }else{
      let values = ''
      let curr = this.head
      while(curr){
        values += `${curr.value} `
        curr = curr.next
      }
      console.log(values)
    }
  }
}

const list = new LinkedList()

list.print()
list.append(5)
list.append(10)
list.print()
list.prepend(50)
list.prepend(100)
list.print()
list.insert(25,3)
list.print()
list.removeFrom(0)
list.print()
list.removeValue(10)
list.print()