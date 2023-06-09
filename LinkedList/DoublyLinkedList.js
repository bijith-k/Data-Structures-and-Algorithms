class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }
  isEmpty(){
    return this.size === 0
  }
  getSize(){
    return this.size
  }
  prpend(value){
    const node = new Node(Value)
    if(this.isEmpty()){
      this.head = node
      this.tail = node
    }else{
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size++
  }
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
      this.tail = node
    }else{
      this.tail.next = node
      node.prev = this.tail 
      this.tail = node
    }
    this.size++
  }
  removeFromFront(){
    if(this.isEmpty()){
      return console.log("List is empty")
    }
    const value = this.head.value
    this.head = this.head.next
    this.size--
    return console.log(`removed ${value}`)
  }
  removeFromEnd(){
    if(this.isEmpty()){
      return console.log("List is empty")
    }
    const value = this.tail.value
    if(this.size === 1){
      this.head = null
      this.tail = null
    }else{
      this.tail = this.tail.prev
      this.tail.next = null
    }
    this.size--
    return console.log(`removed ${value}`)
  }
  print(){
    if(this.isEmpty()){
      console.log("Empty")
    }else{
      let curr = this.head
      let values = ''
      while(curr){
        values += `${curr.value} `
        curr = curr.next
      }
      console.log(values)
    }
  }
  printReverse(){
    if (this.isEmpty()) {
      console.log("Empty")
    }else{
      let curr = this.tail
      let values = ''
      while(curr){
        values += `${curr.value} `
        curr = curr.prev
      }
      console.log(values)
    }
  }
}

const list = new DoublyLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(0)
list.print()
list.printReverse()
list.removeFromEnd()
list.print()
list.removeFromFront()
list.print()
