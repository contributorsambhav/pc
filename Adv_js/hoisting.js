//calls
greet()//simple function

//function expressions
try{
    funcex()
}catch{
    console.log("Function expressions are not hoisted")
}

//let(or const) variables
console.log (a)
try {
    console.log (b)
}catch{
    console.log("Let is not hoistable")
}

//declarations 
function greet(){
    console.log("welcome !")
}
var a = 36 // var declares(hoisted) and initializes(not hoisted)

let b = 33//let and const does not hoist and declare but initializes after line 

//declaration hoisted to top but intialization does not
console.log (a+b)

//function expressions are not hoisted

var funcex  = function (){
    console.log("Function expressions")
}