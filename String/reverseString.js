// function reverseString(str){
//   let reversedString = ''
//   for(let char of str){
//     reversedString = char + reversedString
//   }
//   return reversedString
// }

function reverseString(str){
  return str.split('').reverse().join('')
}


const originalString = 'Hai bijith'
const reversedString = reverseString(originalString)
console.log(reversedString)
