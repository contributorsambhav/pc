const prompt = require('prompt-sync')({sigint : true})

chances = 100

console.log(`you have ${chances} chances`)

let a = parseInt(Math.random() * 101);
// console.log(a);


for (i = chances; i > 0; i--) {

  b = prompt("enter your guess : ")
  if (a == b) {
    console.log("You guessed it right")
    break;
  }
  else {
    chances -= 1
    console.log(`you have ${chances} chances left`)
    if (a > b) {
      console.log("enter a bigger number")
    }
    else {
      console.log("enter a smaller number")

    }
  }
}

console.log(`great your score is ${101 - chances} `)


