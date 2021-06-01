//message is variable : arg variable
function sayHello(message) {
    console.log(`Message is ${message}`)
}

//'Hello' is parameter
sayHello('Hello');
sayHello(100);
sayHello();//undefined

//default args : ES 6 features
function multiply(a = 0, b = 0) {
    console.log(`a=${a} b=${b}`)
    let result = a * b;
    console.log(`Multiplication ${result}`)
}
multiply(10, 10)
multiply() //undefined,undefined

//var args - variable length arg;
// function log() {
//     //arguments : built in variable inside function which collects all parameters
//     console.log(arguments)
// }
//es 6 var args : ...rest operator
function log(...args) {
    //arguments : built in variable inside function which collects all parameters
    console.log(args)
}
log('app')
log('app', 'error')
log('app', 'error', 'in myfile.txt')
