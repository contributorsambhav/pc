const fs = require("fs")

let hiscore = fs.readFileSync("hiscore.txt")
console.log(hiscore)