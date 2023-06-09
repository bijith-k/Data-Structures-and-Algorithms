class MinHeap{
  constructor(){
    this.heap =[]
  }

  buildHeap(arr){
    this.heap=[...arr]
    const startIndex = Math.floor((this.heap.length-1)/2)
    
    for(let i=startIndex;i>=0;i--){
      this.heapifyDown(i)
    }
  }
  
  insert(value){
    this.heap.push(value)
    this.heapifyUp(this.heap.length-1)
  }
  remove(){
    if(this.heap.length === 0) return null

    const minValue = this.heap[0]
    const lastValue = this.heap.pop()
    if(this.heap.length>0){
      this.heap[0] = lastValue
      this.heapifyDown(0)
    }
    return minValue
  }
  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown(index) {
    let childIndex = 2 * index + 1;
    
    while (childIndex < this.heap.length) {
      if (
        childIndex + 1 < this.heap.length &&
        this.heap[childIndex + 1] < this.heap[childIndex]
      ) {
        childIndex += 1;
      }
      if (this.heap[index] <= this.heap[childIndex]) break;

      [this.heap[index], this.heap[childIndex]] = [this.heap[childIndex], this.heap[index]];
      index = childIndex;
      childIndex = 2 * index + 1;
    }
  }
}

const minHeap = new MinHeap()

minHeap.buildHeap([1, 3, 5, 2, 6, 7, 10])
// minHeap.buildHeap([10, 5, 25, 3, 30, 22, 12])
console.log(minHeap.heap)

minHeap.insert(4)
console.log(minHeap.heap)

minHeap.remove()
console.log(minHeap.heap)
