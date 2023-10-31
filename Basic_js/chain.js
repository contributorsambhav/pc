let p1 = new Promise((resolve, reject) => {
  console.log("This is p1");
  resolve(1);
}).then((value) => {
  let p2 = new Promise((resolve, reject) => {
    myfunc(value);
    let sec = value * 2;
    resolve(sec);
  }).then((value) => {
    let p3 = new Promise((resolve, reject) => {
      myfunc(value);
      let third = value * 3;
      resolve(third);
    })
      .then((value) => {
        myfunc(value);
      })
      .then(() => {
        myfunc("Undesrstood the way of chaining");
      });
  });
});

p1.then(() => {
  console.log("Independent p1 call");
});

// p2.then(()=>{
//   console.log("Independent p2 call") will give error as p2 is defined in p1 not globally
// })

// p3.then(()=>{
//   console.log("Independent p3 call")
// })

function myfunc(value){
  setTimeout(() => {
    
    console.log(value)
  }, 3000);
}