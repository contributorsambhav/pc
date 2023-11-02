let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            console.log("Resolved after 2 seconds")
            resolve(56)
    }, 2000)
})

p1.then((value) => {
    console.log(value)
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve("Promise 2") }, 2000)
    }) 
}).then((value) => {
    
    console.log("We are done")
    return  new Promise ((resolve,reject)=>{
            setTimeout(() => {
            reject (45)
        }, 2000);
        })
    
}).then((value)=>{
    return new Promise((resolve,reject )=>{

        setTimeout(() => {
            resolve ("Finally")            
            console.log("Now we are pakka done")
        }, 1000);
    })
},()=>{
    console.log("Promise rejected")
})
