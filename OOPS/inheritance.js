class railwayform {

    constructor(givenname, trainno, address) {
        console.log("constructor called");
        this.name = givenname
        this.trainno = trainno
        this.address = address

    }

    preview() {
        console.log("name :"+ this.name)
        console.log("train no.: "+this.trainno)
        console.log("address: "+this.address)
    }

    submit() {

        console.log(this.name + ": Your form is submitted")
    }

    cancel() {
        console.log(this.name + ": Your form is canceled")
    }

}
//HARRYfORM IS AN OBJECT
let harryForm = new railwayform("harry", 7479, "bihar jabalpur")


//Inheritance starts here
class metroform extends railwayform{




    accelarate(){
        console.log("Metro speed reached")
    }
}


let metro = new metroform("Violet","Blue","Delhi")

metro.accelarate()
metro.submit()
