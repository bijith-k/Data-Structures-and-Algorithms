function sort(arr) {
  let N = arr.length
  // Build heap (rearrange array)
  for (let i = Math.floor(N / 2) - 1; i >= 0; i--)
    {heapify(arr, N, i);}
  // One by one extract an element from heap
 
  for (let i = N - 1; i > 0; i--) {
    // Move current root to end
    // let temp = arr[0];
    // arr[0] = arr[i];
    // arr[i] = temp;
    [arr[0], arr[i]] = [arr[i], arr[0]]
    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
  console.log(arr)
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, N, i) {
  let largest = i; // Initialize largest as root
  let l = 2 * i + 1; // left = 2*i + 1
  let r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < N && arr[l] > arr[largest])

    largest = l;

  // If right child is larger than largest so far
  if (r < N && arr[r] > arr[largest])
    largest = r;

  // If largest is not root
  if (largest != i) {
    // let swap = arr[i];
    // arr[i] = arr[largest];
    // arr[largest] = swap;
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    // Recursively heapify the affected sub-tree
    heapify(arr, N, largest);
  }
}

/* A utility function to print array of size n */
function printArray(arr) {
  let N = arr.length;
  let value = ""
  for (let i = 0; i < N; ++i) {
    value += `${arr[i]} `
  }
  console.log(value)

}


let arr = [120, 11, 1300, 500, 660, 700];
let N = arr.length;

sort(arr);


// printArray(arr, N);
