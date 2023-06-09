function paliendrome(str){
  for(let i =0 ;i <str.length;i++){
    if(str[i] !== str[str.length - 1 - i]){
      return console.log(`${str} is not paliendrome`)
    }
  }
  return console.log(`${str} is paliendrome`)
  
}

let string ="malayalam"
paliendrome(string)