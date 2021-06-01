//NaN - Not a Number -  It is number represents numerical errors.

let price; // undefined
let totalPrice = price * 100;
console.log(`The Total Price ${totalPrice}`)

//type conversion; string to number

//qty is now string because "" but value is number
let qty = "1000"; // string will be converted into number first 
//implicit conversion; before computation, variable is converted into number...
let totalQty = qty * 100;
console.log(`Total Qty ${totalQty}`);
//explicit conversion
totalQty = parseFloat(qty) * 100;
console.log(`Total Qty ${totalQty}`);

//NaN and type conversion
let count="$10";
let totalCount = count * 12;
console.log(`Total Count ${totalCount}`);