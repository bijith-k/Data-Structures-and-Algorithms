class Node{
  constructor(value){
    this.value = value
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
  
  prepend(value) {
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
     
  }
  insert(value,index){
    if(index<0 || index > this.size){
      return console.log("Invalid index")
    }
    if(this.index === 0){
      this.prepend(value)
    }
     else{
       const node = new Node(value)
       let prev = this.head
       for(let i = 0;i < index-1;i++){
        prev = prev.next
       }
       node.next = prev.next
       prev.next = node
       this.size++
    }
  }
  search(value){
    if(this.isEmpty()){
      return console.log("List is empty to search")
    }else{
      let i = 0 
      let curr = this.head
      while(curr){
        if(curr.value === value){
          return console.log(`${value} found at index ${i}`)
        }
        curr = curr.next
        i++
      }
    }
    return console.log(`${value} is not in the list`)
  }
  print() {
    if (this.isEmpty()) {
      return console.log('List is empty')
    } else {
      let curr = this.head
      let values = ''
      while (curr) {
        values += `${curr.value} `
        curr = curr.next
      }
      console.log(values)
    }
  }
}

const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.prepend(3)
list.prepend(8)
list.prepend(2)
list.prepend(5)
list.print()
list.search(9)