// i/p nums=[2,7,11,15], target = 9
// o/p = [0,1]
// i/p nums=[3,2,4] , target = 6
// o/p = [1,2]


//Brute force solution
// const twoSum = (arr,target) => {
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]+arr[j] === target) return [i,j]
//   }
// }
// return false
// }

// console.log(twoSum([2, 7, 11, 15],9))


//using js objects

const twoSum = (arr,target) => {
  var obj = {}

  for(let i=0;i<arr.length;i++){
    var n = arr[i]
    
    if(obj[target-n] >= 0){
      return [obj[target-n],i]
    }else{
      obj[n] = i
    }
  }
}

console.log(twoSum([2, 7, 11, 15],9))

 