class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Stack{
  constructor(){
    this.top = null
    this.size = 0
  }

  push(element){
    const node = new Node(element)
    if(this.isEmpty()){
      this.top = node
    }else{
      node.next = this.top
      this.top = node
    }
    this.size++
  }

  pop(){
    if(this.isEmpty()){
      return null
    }
    const removeNode = this.top
    this.top = removeNode.next
    removeNode.next = null
    this.size--
  }
  peek(){
    if(this.isEmpty()){
      return null
    }
    return this.top.data
  }
  isEmpty(){
    return this.size === 0
  }

  size(){
    return this.size
  }
  print(){
    let current = this.top
    const items = []
    while(current){
      items.push(current.data)
      current = current.next
    }
    console.log(items.toString())
  }
}

const stack = new Stack()
console.log(stack.isEmpty());

stack.push(10);
stack.push(30);
stack.push(20);

console.log(stack.size());
stack.print();

console.log(stack.pop());
console.log(stack.peek());