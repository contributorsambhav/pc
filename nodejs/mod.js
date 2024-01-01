

function average(arr){

   let sum = 0;
   
 arr.forEach(element => {
    sum +=element

 });
let a = arr.length
let result = sum/a
 return result
}


module.exports = average