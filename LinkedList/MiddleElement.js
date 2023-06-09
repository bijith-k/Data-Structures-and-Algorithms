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
  middleElement(){
      if(this.isEmpty()){
        return console.log("List is empty")
      }
      
      let middleIndex = Math.floor(this.size/2)
      let middleNode = this.head
      let prev = this.head
      for(let i=0 ;i< middleIndex ;i++){
        prev = middleNode
        middleNode = prev.next
      }
      prev.next = middleNode.next

      return middleNode.value
  }
  middleElementFind(){
    if(!this.head || !this.head.next){
      return null
    }

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast && fast.next) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }

    // Remove the middle element
    prev.next = slow.next;
    return slow.value
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
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(5)
list.append(9)
list.append(4)
list.append(5)
list.print()
// console.log(list.middleElement())
console.log(list.middleElementFind())
list.print()
