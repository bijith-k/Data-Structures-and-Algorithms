// function rotateArray(nums,k){
//   let size = nums.length
//   if(k>size){
//     k = k%size
//   }
//   const rotated = nums.splice(size - k,size)
//   nums.unshift(...rotated)
//   return nums
// }

function rotateArray(nums,k){
  let size = nums.length
  if(k > size){
    k = k%size
  }
  reverse(nums, 0, nums.length - 1)
  reverse(nums,0,k-1)
  reverse(nums, k, nums.length - 1)
  return nums
}

function reverse(nums,left,right){
  while(left<right){
    const temp = nums[left]
    nums[left++] = nums[right]
    nums[right--] = temp
  }
}
let array = [1, 2, 3, 4, 5, 6]
console.log(rotateArray(array,2))