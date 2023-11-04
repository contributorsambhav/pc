
class Account{
    constructor(balance) {
        this.balance=balance;

}

debit(amount){
    if(this.balance>amount){
        console.log("true");
    }else{
        console.log("false");
    }
}
    

getBalance(){
    console.log(this.balance)
}

credit(amount){
    this.balance+=amount;
}
}


class Account{
    constructor(balance) {
        this.balance = balance;
    }
    
    debit = (amount) => {
        if (this.balance < amount) return false;
        this.balance -= amount;
        return true;
    }
    
    credit = (amount) => {
        this.balance += amount;
        return true;
    }
    
    getBalance = () => this.balance
}