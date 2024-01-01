 //spread operator
let arr =  [3,5,8]
let obj = { ...arr}// creates obj object with indexes as keys and values of arr as value.

console.log(obj)// gives content of obj with indexes as keys and values of arr as value.

console.log({obj})// print object with obj as key and content as value.

console.log({...obj})// same output as fifth line

console.log({ ...obj, 0:95 })//same as fifth but index 0 value overridden with 95 
function sum (v1,v2,v3){
    return v1+v2+v3
}

console.log(sum( ...arr))

