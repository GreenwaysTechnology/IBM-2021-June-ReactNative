
class Customer {

    //hardcoded
    // id = 1;
    // name = 'ram'
    //declare instance variables and methods
    constructor(id = 1, name = 'ram') {
        //instance variable declaration;
        this.id = id;
        this.name = name;
    }
    calculateInvoice() {
        return 1000;
    }
}
let cust = new Customer(23, 'Miller')
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)

cust = new  Customer()
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)