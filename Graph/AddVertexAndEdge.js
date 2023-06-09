class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = new Set()
    }
  }
  addEdge(vertex1,vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addVertex(vertex1)
    }
    if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2)
    }
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)
  }
  hasEdge(vertex1,vertex2){
    return (
      this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    )
  }
  display(){
    for(let vertex in this.adjacencyList){
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
    }
  }
  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
  }
  removeVertex(vertex){
    if(!this.adjacencyList[vertex]){
      return
    }
    for(let adjcentVertex of this.adjacencyList[vertex]){
      this.removeEdge(vertex,adjcentVertex)
    }
    delete this.adjacencyList[vertex]
  }
  bfs(startVertex) {
     
    const visited = {};
    const queue = [startVertex];
    
    const result = [];

    visited[startVertex] = true;
 
    while (queue.length > 0) {
    

      const currentVertex = queue.shift();
      result.push(currentVertex);
      
      for (let neighbor of this.adjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  dfs(startVertex) {
    const visited = {};
    const result = [];

    const traverse = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          traverse(neighbor);
        }
      }
    };

    traverse(startVertex);
    return result;
  }

  hasCycle() {
    const vertices = Object.keys(this.adjacencyList);
    const visited = {};

    for (let vertex of vertices) {
      if (!visited[vertex] && this._hasCycleUtil(vertex, visited, null)) {
        return true;
      }
    }

    return false;
  }

  _hasCycleUtil(vertex, visited, parent) {
    visited[vertex] = true;

    for (let neighbor of this.adjacencyList[vertex]) {
      if (!visited[neighbor]) {
        if (this._hasCycleUtil(neighbor, visited, vertex)) {
          return true;
        }
      } else if (neighbor !== parent) {
        return true;
      }
    }

    return false;
  }
  


}

// const graph = new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')

// graph.addEdge("A", "B")
// graph.addEdge("A", "C")
// graph.addEdge("B", "C")
// graph.addEdge("B", "A")
// graph.addEdge("B", "D")
// graph.addEdge("D", "D")

// graph.display()
// console.log(graph.hasEdge("C","B"))
// // graph.removeVertex("B")
// graph.display()
// console.log(graph.bfs("A")); // Breadth-First Search
// console.log(graph.dfs("A")); // Depth-First Search
// const graph = new Graph();
// graph.addEdge(0, 1);
// graph.addEdge(0, 2);
// graph.addEdge(1, 2);
// graph.addEdge(2, 0);
// graph.addEdge(2, 3);
// graph.addEdge(3, 3);
const g = new Graph();
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 5);
g.addEdge(2, 6);


console.log("Following is Breadth First Traversal (starting from vertex 1):");
console.log(g.bfs(0))
console.log(g.dfs(0))
console.log(g.hasCycle())
 