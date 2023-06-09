// function removeDuplicates(nums) {
//   for (let i = 0; i < nums.length -1; i++) {
//     if (nums[i] === nums[i+1]) {
//       nums.splice(i+1, 1)
//       i--;
//     }
//   }
//   return nums.length
// }

function removeDuplicates(nums){
  if(nums.length === 0) return 0
  let i = 0
  for(let j = 1; j< nums.length ;j++){
    if(nums[i] != nums[j]){
      i++
      nums[i] = nums[j]
    }
  }
  return i+1
}

let array = [1, 2, 3, 4, 4, 4, 5]
console.log(removeDuplicates(array))