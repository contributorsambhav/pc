let promise = new Promise((resolve, reject) => {
 setTimeout(()=>{
    console.log("2 secs passed")
    // let r = 3
    resolve(55)
 },2000)
}).then((value)=>{
    console.log(value)
console.log("script loaded")
})