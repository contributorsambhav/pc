console.log("this is mod.js")
let sum = 0;

function average(arr){
 arr.forEach(element => {
    sum +=element

 });

let result = sum/arr.length
 return result
}

console.log(average([5,6]))

module.exports = average