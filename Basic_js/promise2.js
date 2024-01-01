new Promise(res => {
    console.log("1")
    res(res);
  }).then(res => {
    console.log("2")
  }).then(res => {
    console.log("3")
  })