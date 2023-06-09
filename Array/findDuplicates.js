function findDuplicates(arr){
  let duplicates = []
  for(let i = 0 ;i <arr.length;i++){
    for(let j = i+1 ;j <arr.length ;j++){
      if(arr[i]===arr[j] && !duplicates.includes(arr[i]) ){
        duplicates.push(arr[i])
      }
    }
  }
  return duplicates
}

let numbers = [1, 2, 3, 4, 3, 2,2,5 ,5, 6, 7, 8, 1];
let duplicateNumbers = findDuplicates(numbers);
console.log(duplicateNumbers);