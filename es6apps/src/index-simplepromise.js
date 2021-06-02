//promise

function sayHello() {
    return 'Hello'
}
function delay() {
    return Promise.resolve('I am delayed api') // returns Promise Object
}
function delayWithError() {
    return Promise.reject('delay with reject') //returns Promsie Object with error 
}

console.log(sayHello())
delay()
    .then(response => console.log(response))
    .catch(err => console.log(err));

delayWithError().catch(err => console.log(err))

console.log('end')