// Input: 
// Output: 5
// Explanation: The last word is "World" with length 5.

//58

var lengthOfLastWord = function (s) {
  let word = s.trim()
  let count = 0;
  for (let i = word.length-1; i >= 0; i--) {
    if (word[i] == " ") {
      break;
    }
    count++
  }
  return count
};

// let s = "Hello World"
// let s = "   fly me   to   the moon  "
let s = "luffy is still joyboy"
// console.log(s.length)
console.log(lengthOfLastWord(s))
