let a = parseInt(prompt("Enter a number"))
let b = parseInt(prompt("Enter a number"))
let c = parseInt(prompt("Enter a number"))



let d = parseInt(prompt("ENTER A NUMBER"))


function callback() {
    function sum(a, b, c) {
        return (a + b + c)
    }
    document.write(sum(a, b, c) ** d)
}
console.log(callback())