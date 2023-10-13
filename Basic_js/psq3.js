async function parse() {


    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Undesired")
        }, 3000)
    })
try{

    let a = await promise
    console.log(a)
}
catch(err){
    console.log(err)
}
}

parse()
