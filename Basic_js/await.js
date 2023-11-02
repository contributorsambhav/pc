async function wait() {
    console.log("No need to await")

        var delhiweather = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Value those who await for you")
                resolve("46-degrees")
            }, 5000);
        })


    let delhiW = await delhiweather
    console.log(delhiW)
}

wait()