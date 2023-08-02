class Animal{

  constructor(name){
    this.name = name
  }

  fly(name){
    alert(this.name+" udd raha hai")
  }

  get name() {
    return this._name
  }

  set name(newname){
    this._name = newname
  }
}

let a =new Animal("lovebird")

// a.fly()

console.log(a.name)

a.name= "Arunita"

console.log(a.name)

class lovebird extends Animal{
  constructor(name1,name2){
    super()
    this.name1 = name1
    this.name2 = name2
  }
  enjoy(name1,name2){
    console.log(this.name1+" and " + this.name2 +" are enjoying")
  }
}

let b = new lovebird("Arun","Arunita")

b.enjoy()
console.log(b instanceof Animal)
console.log(b instanceof lovebird)
console.log(a instanceof Animal)
console.log(a instanceof lovebird)

