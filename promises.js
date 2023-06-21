let myPromise = new Promise(function (myResolve, myReject) {

    setTimeout(() => {
        myResolve(56)
    }, 2000)


}).then((value) => {
    console.log(value)
    var p2 = new Promise(function (myResolve, myReject) {


        myResolve(66)


    })
    return p2
})

p2.then((value)=>{
    console.log(value)
})
