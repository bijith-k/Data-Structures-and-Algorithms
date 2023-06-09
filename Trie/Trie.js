class Node{
  constructor(){
    this.children={}
    this.isWordEnd = false
  }
}

class Trie{
  constructor(){
    this.root = new Node()
  }
  insert(word){
    let curr = this.root
    for(let i=0;i<word.length;i++){
      let charToInsert = word[i]
      if(!(charToInsert in curr.children)){
        curr.children[charToInsert] = new Node()
      }
      
      curr = curr.children[charToInsert]
    }
    curr.isWordEnd = true
  }
  contains(word){
    let curr = this.root
    for(let i=0;i<word.length;i++){
      let charToFind = word[i]
     
      if(!(charToFind in curr.children)){
         
        return false
      }
      curr = curr.children[charToFind]
    }
    return curr.isWordEnd
  }
  startsWithPrefix(prefix){
    let curr = this.root
    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i]

      if (!(charToFind in curr.children)) {

        return false
      }
      curr = curr.children[charToFind]
    }
    return true
  }
  remove(word) {
    this.removeWord(this.root, word, 0);
  }

  removeWord(node, word, index) {
    if (index === word.length) {
      
      if (!node.isWordEnd) {
        return;
      }
      
      node.isWordEnd = false;
     
      return Object.keys(node.children).length === 0;
    }

    const charToRemove = word[index];
    if (!(charToRemove in node.children)) {
      
      return;
    }
   
    const shouldDelete = this.removeWord(node.children[charToRemove], word, index + 1);
    if (shouldDelete) {
      delete node.children[charToRemove];
      return Object.keys(node.children).length === 0;
    }
     
    return false;
  }
}

const trie = new Trie()

trie.insert("Arun")
trie.insert("Athul")

// console.log(trie.contains("Arunss"))
// console.log(trie.contains("Jith"))
// console.log(trie.startsWithPrefix("Jith"))
// console.log(trie.contains("Jithe"))
console.log(trie.contains("Athul"))

trie.remove("Athul")
console.log(trie.contains("Athul"))

// console.log(trie.startsWithPrefix("Jithe"))
