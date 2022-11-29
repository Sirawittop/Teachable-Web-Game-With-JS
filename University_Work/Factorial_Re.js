var i = 1
const factorial = (n) =>{
    if( n !== 0){
        i = factorial(n-1)
        console.log("N = "+(n)+" = "+n*i)
        return n * i
    }else{
       return 1
    } 
}

console.log(factorial(4))
