function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';  
  }

  let prefix = strs[0];  

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);  
      if (prefix === '') {
        return '';  
      }
    }
  }
  return prefix;
}

const strings1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings1));  // Output: "fl"

const strings2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strings2));  // Output: ""
