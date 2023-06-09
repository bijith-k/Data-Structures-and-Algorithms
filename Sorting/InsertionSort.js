


// function insertionSort(arr){
//   for(let i = 1 ;i<arr.length;i++){
//     let numberToInsert = arr[i]
//     let j = i - 1
//     while(j>=0 && arr[j]>numberToInsert){
//       arr[j+1] = arr[j]
//       j = j-1
//     }
//     arr[j+1] = numberToInsert
//   }
// }

function insertionSort(array){
  for(let i = 1;i<array.length;i++){
    let number = array[i]
    let j = i-1
    while(j>=0 && array[j]>number){
      array[j+1] = array[j]
      j--
    }
    array[j+1] = number
  }
}

const array = [1, 33, 5, 3, -2, 4, 22, -32]
insertionSort(array)
console.log(array)

