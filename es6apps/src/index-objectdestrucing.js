//Object Destructuring

/**
function printEmplyee(employee) {
    //print employee details
    console.log(`id : ${employee.id}`)
    console.log(`name : ${employee.name}`)
    console.log(`City : ${employee.address.city}`)
}

function printEmplyee(employee) {
    //print employee details
    //destructure : break the object into local variables
    //  const { id, name, address } = employee;
    const { id, name, address: { city } } = employee;
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`City : ${city}`)
}
 
function printEmplyee({ id, name, address: { city } }) {
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`City : ${city}`)
}
*/

const printEmplyee = ({ id, name, address: { city } }) => {
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`City : ${city}`)
}
printEmplyee({ id: 1, name: 'Subramanian', address: { city: 'Coimbatore' } })

/////////////////////////////////////////////////////////////////////////////////////
// How to return object 

/** 
function getStock() {
    return {
        id: 1,
        symbol: 'GOOGLE',
        qty: 1000,
        price: 10000
    };
} 

const getStock = () =>({
        id: 1,
        symbol: 'GOOGLE',
        qty: 1000,
        price: 10000
});
console.log(getStock())

*/

//dynamic properties and object destructuring

// const getStock = (id = 1, symbol = 'GOOGLE', qty = 1000, price = 10000) => ({
//     id: id,
//     symbol: symbol,
//     qty: qty,
//     price: price
// });


const getStock = (id = 1, symbol = 'GOOGLE', qty = 1000, price = 10000) => ({
    id,   //left:right if it is same, remove one
    symbol,
    qty,
    price
});

console.log(getStock())
console.log(getStock(2,'MicroSoft',100,5000))
