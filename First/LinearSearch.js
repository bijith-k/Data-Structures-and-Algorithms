function linearSearch(array,t){
  for(let i=0;i<array.length;i++){
    if(array[i]===t){
      return i
    }
  }
  return -1
}


console.log(linearSearch([-5, 2, 4, 6, 10], -5))
console.log(linearSearch([-5, 2, 4, 6, 10], 10))
console.log(linearSearch([-5, 2, 4, 6, 10], 9)) 