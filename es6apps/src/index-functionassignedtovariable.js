//way-1
function sayHello(name = 'foo') {
    console.log('hello', name);
    return 'welcome'
}
sayHello('subramanian')

//store the function into a variable.
const hello = sayHello;
hello('ram');

//lnline assigments: inline functions - 
//way 2
//anonomous function ; function without name
const greeter = function(message='bar') {
    console.log(`${message}`)
    return 'bar foo'
};
console.log(greeter('Hai'))