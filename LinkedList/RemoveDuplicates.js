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
  print(){
    if(this.isEmpty()){
      console.log("List is empty")
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
  removeDuplicate(){
    let curr = this.head
    while(curr.next){
      if(curr.value === curr.next.value){
      let  removeNode = curr.next
        curr.next = removeNode.next
        curr = removeNode.next
      }
      curr = curr.next
    }
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
  removeDuplicates() {
    const seenValues = {};
    let current = this.head;
    let previous = null;
    while (current) {
      if (seenValues[current.value]) {
        // Node contains a duplicate value
        previous.next = current.next;
        this.size--;
      } else {
        // Node has a unique value
        seenValues[current.value] = true;
        previous = current;
      }

      current = current.next;
    }
  }


}

const list = new LinkedList()

list.append(0)
list.append(1)
list.append(3)
list.append(3)
list.append(4)
list.append(4)
list.append(4)
list.append(5)
list.append(5)
list.print()
// list.removeDuplicate()
list.removeDuplicates()
list.print()