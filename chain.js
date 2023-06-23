let delhiweather = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Hi")
    }, 2000);
    resolve(69)
  }).then((value)=>{
          console.log(value)
    }
  )