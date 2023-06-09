// function QuickSort(arr){
//   if(arr.length<2){
//     return arr
//   }
//   let pivot = arr[arr.length - 1]
//   let left = []
//   let right = []
//   for(let i=0;i<arr.length - 1;i++){
//     if(arr[i] < pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...QuickSort(left),pivot,...QuickSort(right)]
// }

function QuickSort(array){
  if(array.length<2){
    return array
  }

  let pivot = array[array.length-1]
  let left =[]
  let right = []
  for(let i = 0;i<array.length-1;i++){
if(array[i]<pivot){
  left.push(array[i])
}else{
  right.push(array[i])
}
  }
  return [...QuickSort(left),pivot,...QuickSort(right)]
}

const array = [1, 33, 5, 3, -2, 4, 22, -32]
  
console.log(QuickSort(array))
 