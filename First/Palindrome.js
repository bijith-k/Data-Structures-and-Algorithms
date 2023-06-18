const isPaliendrome = (num)=>{
  return num<0 ? false : (num === +num.toString().split("").reverse().join(""))
}

console.log(isPaliendrome(12))