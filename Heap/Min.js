class Min {
  constructor() {
    this.heap = []
  }
  buildHeap(arr) {
    this.heap = [...arr]
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i)
    }
  }
  shiftDown(index) {
    // console.log(index,"in")
    let endIdx = this.heap.length - 1
    let leftIdx = this.leftChild(index)
    // console.log(leftIdx, endIdx)
    while (leftIdx <= endIdx) {
      let rightIdx = this.rightChild(index)
      let idexToShift
      if (rightIdx < endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
        // console.log("dd")
        idexToShift = rightIdx
      } else {
        // console.log("ddsdfsdfs")
        idexToShift = leftIdx
      }
      // console.log(this.heap[index], this.heap[idexToShift],"val")
      if (this.heap[index] > this.heap[idexToShift]) {
        [this.heap[index], this.heap[idexToShift]] = [this.heap[idexToShift], this.heap[index]]
        // console.log("first")
        // console.log(this.heap,"ii")
        index = idexToShift
        leftIdx = this.leftChild(index)
      } else {
        return
      }
    }
  }
  shiftUp(index) {
    let parentIdx = this.parent(index)
    while (index > 0 && this.heap[parentIdx] > this.heap[index]) {
      [this.heap[index], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[index]]
      index = parentIdx
      parentIdx = parent(index)
    }

  }
  peek() {
    return this.heap[0]
  }
  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
    this.heap.pop()
    this.shiftDown(0)
  }
  insert(value) {

  }
  parent(i) {
    return Math.floor((i - 1) / 2)
  }
  leftChild(i) {
    return (i * 2) + 1
  }
  rightChild(i) {
    return (i * 2) + 2
  }
  display() {
    for (let i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i])
    }
  }

}


const minHeap = new Min()

minHeap.buildHeap([7, 5, 6, 2, 3, 1, 10])
console.log(minHeap.heap)

// minHeap.insert(4)
// console.log(minHeap.display())

minHeap.remove()
console.log(minHeap.heap)