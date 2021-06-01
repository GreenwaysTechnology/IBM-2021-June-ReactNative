//function returns from another function.

// function counter() {
//      //inner function
//      function inc(){
//          console.log('inc')
//      }
//      inc()
// }

// function counter() {
//     //inner function , if i want to call outside
//     function inc() {
//         console.log('inc')
//     }
//     return inc;
// }

// function counter() {
//     //inner function , if i want to call outside
//     return function inc() {
//         console.log('inc')
//     }
// }

function counter(seedValue = 0) {
    //inner function , if i want to call outside
    return function () {
        console.log('inc')
        return seedValue + 1
    }
}


//way 1 
const inc = counter();
console.log(inc());

//way -2 
console.log(counter(1)())
