//function as parameter to another function;

function add(a = 10, b = 20) {
    return a + b;
}

console.log(add(10, 10)); // hardcoded values
let x = 10;
let y = 20;
console.log(add(x, y)); // variables


//function as parameter
function sayGreet(greet) {
    greet();
}
//function 
let hai = function () {
    console.log('Hai-1')
}
sayGreet(hai); // passing function as parameter

sayGreet(function () {
    console.log('Hai-2')
});
////////////////////////////////////////////////////////////////////////////////

function save(callback) {
    const status = callback('product-info')
    console.log(status)
}
let saveProduct = function (product) {
    console.log(product)
    return 'done'
}
save(saveProduct)
save(function (product) {
    console.log(product)
    return 'done'
})
