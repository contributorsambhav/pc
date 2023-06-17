let x = document.getElementById("layout")
// document.write(x)

// x.append("this is appended text")
// x.prepend("this is appended text")
// x.before("this is appended text")
// x.after("this is appended text")
let a = setTimeout(function(){x.replaceWith("asla")},4000)
// clearTimeout(a)
console.log(a)
function sum(p,q,r) {
    alert(p+q+r)
}
let b = setInterval(sum,2000,5,6,7)

// clearInterval(b)


