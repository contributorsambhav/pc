async function myFunction(){
    let abc =new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("2 secs passed")
            resolve(55)
         },2000)  
    })
    
     let n = await abc 
     console.log(n)
}

myFunction()