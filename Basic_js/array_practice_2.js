arr = [1,50,4,60,7]

let nr =arr.filter((x)=>{
return x%10==0
})
console.log(nr)

let a3 = arr.reduce((h1,h2)=>{
    return h1*h2
})

console.log(a3)