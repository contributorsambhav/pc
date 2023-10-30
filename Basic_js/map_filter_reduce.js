vaibhav = [45,87,40]

vaibhav.map((value,index,array)=>{
console.log(value+1,index,array)
}
)

//filter method

let arr2 = [ 45,69,47,15]
let a2= arr2.filter((a)=>{
    return a<50
})

console.log(a2)

// reduce method
let a3 = arr2.reduce((h1,h2)=>{
    return h1*h2
})

console.log ( a3)