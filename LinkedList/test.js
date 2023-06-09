class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }
  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }
  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
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
  print(){
    if(this.isEmpty()){
      return console.log("List is empty")
    }
    let curr = this.head
    let values = ''
    while(curr){
      values += `${curr.value} `
      curr = curr.next
    }
    console.log(values)
  }
  insert(value,index){
    if(index<0 || index > this.size){
      return console.log("Invalid index")
    }
    if(index === 0) {
      this.prepend(value)
    }else{
      const node = new Node(value)
      let prev = this.head
      for(let i = 0 ;i<index-1;i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }
  remove(index){
    if(index<0 || index >= this.size){
      return console.log("Invalid index")
    }
    let removeNode
    if(index === 0) {
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
    return console.log(`Removed ${removeNode.value}`)
  }
  removeValue(value){
    if(this.isEmpty()){
      return console.log("Nothing to remove")
    }
    if(this.head.value === value){
      this.head = this.head.next
    }else{
      let prev = this.head
      while(prev.next && prev.next.value !== value){
        prev = prev.next
      }
      if(prev.next){
        let removeNode = prev.next
        prev.next = removeNode.next
      }else{
        return console.log(`No value corresponding to ${value}`)
      }
    }
    this.size--
    return console.log(`Removed ${value}`)
  }
  search(value){
    if(this.isEmpty()){
      return console.log("List is empty")
    }
    let i = 0
    let curr = this.head
    while(curr){
      if(curr.value === value){
        return console.log(`${value} found at index ${i}`)
      }
      curr = curr.next
      i++
    }
    return console.log(`No value corresponding to ${value}`)
  }
  reverse(){
    if(this.isEmpty()){
      return console.log("List is empty to reverse")
    }else{
      let prev = null
      let curr = this.head
      while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
      }
      this.head = prev
    }
  }
}

const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.prepend(5)
list.print()
list.prepend(15)
list.print()
list.append(10)
list.print()
list.append(20)
list.print()
list.insert(25,1)
list.print()
list.insert(35, 5)
list.print()
list.remove(0)
list.print()
list.remove(3)
list.print()
list.removeValue(10)
list.print()
list.search(35)
list.reverse()
list.print()