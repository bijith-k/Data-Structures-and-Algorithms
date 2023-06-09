class HashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }

  hash(key){
    let total = 0
    for(let i=0;i<key.length;i++){
      total +=key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key,value){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(!bucket){
      this.table[index] = [[key,value]]
    }else{
      const sameKeyItems = bucket.find(item=>item[0]===key)
      if(sameKeyItems){
        sameKeyItems[1] = value
      }else{
        bucket.push([key,value])
      }
    }
  }

  get(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
      const sameKeyItems = bucket.find(item => item[0] === key)
      if(sameKeyItems){
        return sameKeyItems[1]
      }
    }
    return undefined
  }

  remove(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
      const sameKeyItems = bucket.find(item => item[0] === key)
      if(sameKeyItems){
        bucket.splice(bucket.indexOf(sameKeyItems),1)
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i])
      }
    }
  }

}

const table = new HashTable(50)
table.set('name', 'bij')
table.set('age', 10)
table.display()
console.log(table.get('name'))
table.remove('name')
 table.display()
table.set('name', 'bij')
table.set('same', 'aij')
table.set('age', 10)
table.display()
