//object creations :Constructor patterns: using functions(es 5) / using classes using e6.

function Employee() {
    //declare instance variables and methods
    this.id = 1;
    this.name = 'ram';
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//create object
const emp = new Employee()

console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)


class Customer {
    //instance variables
    id = 1;
    name = "Subramaian";
    constructor() {
        console.log('customer init....')
    }
    //instance methods
    calculateInvoice() {
        return 100;
    }
}
const cust = new Customer();
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`Salary ${cust.calculateInvoice()}`)
/////////////////////////////////////////////////////////////////////////////////////

//literal objects

let products = {
    id: 1,
    name: 'phone',
    // getQty: function () {
    //     return 100;
    // }
    getQty: () => {
        return 100;
    },
    calculateInvoice() {
        return 1000;
    }
}
console.log(`id ${product.id}`)
console.log(`Name ${product.name}`)
console.log(`Qty ${product.getQty()}`)
console.log(`Invoice ${product.calculateInvoice()}`)