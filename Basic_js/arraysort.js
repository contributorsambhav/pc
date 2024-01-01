let arr = [2,5,78,10,21,1,15,14,36,25,1,4,52,65,32]

console.log(arr.sort(function(a,b){
    return b-a;
}))

console.log(arr.sort(function(a,b){
    return a-b;
}))

let arr2 =["Ajax","json" ,"css" ,"pug","nix","graphql"]
console.log(arr2.sort())

const num = [15,26,12566,658]
console.log(num.slice(2))

console.log(num)

num.splice(2,0,58,65)
console.log(num)

num.forEach(element => {
    console.log(element)
});


