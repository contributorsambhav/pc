let text2 = "I am  a very very good very boy"
console.log(text.replace("very","fine"))
//replaces first occurence

//using regex all occurences replaced
let regex = /very/g

let text = "I am  a very very good very boy"

console.log(text.replace(regex,"fine"))