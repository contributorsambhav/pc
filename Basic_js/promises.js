let myPromise = new Promise(function (myResolve, myReject) {

    setTimeout(() => {
        myResolve(56)
    }, 2000)


}).then((value) => {
    console.log(value)
    var p2 = new Promise(function (myResolve, myReject) {
        myResolve(66)
    })
    
})
