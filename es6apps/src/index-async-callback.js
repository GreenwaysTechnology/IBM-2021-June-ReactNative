//async programming using callbacks

// function delay(callback) {
//     setTimeout(callback, 5000,'Hey I am from Kernal'); // is it async
// }

// console.log('start')
// delay(function (response) {
//     console.log(response)
// })
// console.log('end')
const { log } = console


const delay = callback => setTimeout(callback, 5000, 'Hey I am from Kernal'); // is it async

console.log('start')
//delay(response => console.log(response))
//delay(response =>log(response))
//if you just print the response, you can remove response, and =>
delay(log);

console.log('end')