async function wait() {


        var delhiweather = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Hi")
                resolve("46-degrees")
            }, 2000);
        })


    let delhiW = await delhiweather
    console.log(delhiW)
}

wait()