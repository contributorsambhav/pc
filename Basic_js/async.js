async function myFunction() {
    resolve("hi")
  }
  myFunction().then(
    function(value) {console.log(value);}
  );

  let delhiweather = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Hi")
    }, 2000);
    resolve(69)
  }).then((value)=>{
          console.log(value)
    }
  )