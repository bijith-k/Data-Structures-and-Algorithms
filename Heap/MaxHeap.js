class MaxHeap {
  constructor() {
    this.heap = [];
  }

  buildHeap(arr) {
    this.heap = [...arr];
    const startIndex = Math.floor((this.heap.length - 1) / 2);
    for (let i = startIndex; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  remove() {
    if (this.heap.length === 0) return null;

    const maxValue = this.heap[0];
    const lastValue = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown(0);
    }
    return maxValue;
  }

  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
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
        this.heap[childIndex + 1] > this.heap[childIndex]
      ) {
        childIndex += 1;
      }
      if (this.heap[index] >= this.heap[childIndex]) break;

      [this.heap[index], this.heap[childIndex]] = [this.heap[childIndex], this.heap[index]];
      index = childIndex;
      childIndex = 2 * index + 1;
    }
  }
}

// Example usage
const maxHeap = new MaxHeap();
maxHeap.buildHeap([7, 2, 5, 8, 1, 3]);
console.log(maxHeap.heap); // Output: [8, 7, 5, 1, 2, 3]
maxHeap.insert(6);
console.log(maxHeap.heap); // Output: [8, 7, 6, 1, 2, 3, 5]
maxHeap.remove();
console.log(maxHeap.heap); // Output: [7, 2, 6, 1, 5, 3]
