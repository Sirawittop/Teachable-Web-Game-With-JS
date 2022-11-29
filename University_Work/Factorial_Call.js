const sum1 = () => {
    console.log(factorial(4))
}
i = 1
const factorial = (n) =>{
    if( n!== 1){
        return  n*factorial(n-1)
        
    }else{
        return 1
    }
}
console.log("round = ",i," = ",factorial(4))
i++
console.log("round = ",i," = ",factorial(3))
i++
console.log("round = ",i," = ",factorial(2))
i++
console.log("round = ",i," = ",factorial(1))