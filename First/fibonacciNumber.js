//fibonacci series = 0,1,1,2,3,5,..
//i/p n=3 , o/p = 2
//509


//method1
// const fibonacciNumber = (num)=>{
//   const arr=[0,1]
//   for(let i=2;i<=num;i++){
//     arr.push(arr[i-1]+arr[i-2])
//   }
//   console.log(arr[num])
// }
// fibonacciNumber(5)

//method2
const fibonacciNumber = (num) => {
   if(num<=1) return num

   return fibonacciNumber(num-1) + fibonacciNumber(num-2)
}

console.log(fibonacciNumber(5))
 