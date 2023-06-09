class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{
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
  convert(arr){
    for(let i =0 ;i <arr.length ;i++){
      const node = new Node(arr[i])
      if(this.isEmpty()){
        this.head = node
        this.tail = node
      }else{
        this.tail.next = node
        this.tail = node
      }
      this.size++
    }
  }
  print() {
    if (this.isEmpty()) {
      return console.log("List is empty")
    } else {
      let values = ''
      let curr = this.head
      while (curr) {
        values += `${curr.value} `
        curr = curr.next
      }
      console.log(values)
    }
  }
}
 

// function arrayToLinkedList(arr){
//   let head = null
//   let tail = null
//   let values =''
//   for(let i = 0 ;i <arr.length ;i++){
//     const node = new Node(arr[i])

//     if(!head){
//       head = node
//       tail = node
//       values += `${node.value} `
//     }
//     else{
//       tail.next = node
//       tail = node
//     }

//     while(head.next){
// values += `${node.value} `
// head = head.next
//     }

//   }
//   return values
   
// }

 
let array = [1,2,3,4,5]
// const list = arrayToLinkedList(array)
// console.log(list)

const list = new LinkedList()
list.convert(array)
list.print()
console.log(list.getSize()) 