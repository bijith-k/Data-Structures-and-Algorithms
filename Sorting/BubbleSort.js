function bubbleSort(arr){
  let swapped
 
  do {
    swapped = false
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i] =arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  } while (swapped);
}

// function bubbleSort(arr){
//   let swapped

//   do{
//     swapped = false
//     for(let i = arr.length-1;i >0;i--){
//       if(arr[i]>arr[i-1]){
//         let temp = arr[i]
//         arr[i] = arr[i-1]
//         arr[i-1] = temp
//         swapped = true
//       }
//     }
//   }while(swapped)
// }

const array = [1,33,5,3,-2,4,22,-32]
bubbleSort(array)
console.log(array)

 