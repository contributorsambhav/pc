 let mainfunc =  (()=>{
    setTimeout(callback,3000);
    console.log("NOn blocking call")
})

 let callback = (()=>{
    console.log("Three secs passed")
})

mainfunc()