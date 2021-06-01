class Account {
    constructor(id = 'A00010000') {
        this.id = id;
        console.log('account')
    }
    deposit() {
        return 1.5;
    }
}

class SavingsAccount extends Account {
    constructor(id) {
        super(id)
        console.log('savings account')
    }
    //overriding :method redefining
    deposit() {
        return 1500 + super.deposit();
    }
}
let sb = new SavingsAccount('B00013444');
console.log(`Id ${sb.id}  ${sb.deposit()}`)