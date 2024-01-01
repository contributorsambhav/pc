//destructing ,is similar to equality of sets and comparison to get value 

let arr =  [3,5,8,4,5,2,6,5,8,4,7]
let [a,b,,,...rest] = arr//index 2 and 3 are ignored and after 3 are taken into array called rest.

console.log(a)
console.log(b)
console.log(rest)


// with curly braces value can be given in different order but syntax is longer as given below.
let   {c,d} = {d:1,c:5}

console.log(c)
console.log(d)


