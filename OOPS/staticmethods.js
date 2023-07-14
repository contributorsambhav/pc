class animal{

constructor(name){
    this.name = animal.capitalize(name )
    console.log(this.name +" constructor called")
}

static capitalize(name){
  return  name.toUpperCase().charAt(0)+name.slice(1)
}

run(name){
    console.log(this.name+" is running")

}

}

let anti = new animal("sloth")



