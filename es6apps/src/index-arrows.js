//function declaration in es 6 standard : Arrow function

//es 5 function literal
let hello = function () {
    console.log('hello')
};
hello();

//es 6 arrow
hello = () => {
    console.log('hello')
};
hello();
//function body has only one line of code: remove {}
hello = () => console.log('hello')
hello();

//args and params : multi parameter with default value
let add = (a = 1, b = 2) => {
    let r = a + b;
    console.log(r);
};
add(1, 3);
//single parameter without default value:remove () 
let saySomething = message => console.log(message);
saySomething('hello')
////////////////////////////////////////////////////////////////////////////
//how to return value?
let multiply = () => {
    return 10 * 10;
};
console.log(multiply());
//if function has only return statment : remove {} and return statement
multiply = () => 10 * 10;
console.log(multiply());

//single parameter no default value, and return the same
let isActive = active => !active;
console.log(isActive(true));
/////////////////////////////////////////////////////////////////////////////////////

const login = (username, password, success, failure) => {
    if (username === 'admin' && password === 'admin') {
        success('Login success')
    } else {
        failure('Login failed')
    }
}

login('admin', 'admin', function (status) {
    console.log(status)
}, function (error) {
    console.log(error);
})

login('admin', 'admin', status => console.log(status), error => console.log(error))

//return functions and arrow

// function counter(seedValue = 0) {
//     //inner function , if i want to call outside
//     return function () {
//         console.log('inc')
//         return seedValue + 1
//     }
// }

// const counter = (seedValue = 0) => {
//     return () => {
//         console.log('inc')
//         return seedValue + 1
//     }
// }

const counter = (seedValue = 0) => () => seedValue + 1

console.log(counter(1)())