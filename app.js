// console.log("7 datatypes in Javascript")


// String
// Number - 1 2 3 4 5 (interger) 2.124 1.0 0.1 (floats)
// BigInt 
// Boolean - true/false   (a=2; b=2) a === b => true
// null - no value
// undefined - undefined
// object 

// let time = "morning"
// let timeCheck = time === "morning"

// // Homework: read up about `==` and `===`
// console.log(`Hello, Nidhi`)
// console.log(`Hello, Surya`)
// console.log(`Hello, Nishant`)

// if (time) {
//     console.log("Lights are off")
// } else if(time ==="early-morning") {
//     console.log("Turn half the lights on")
// } else {
//     console.log("Lights are on")
// }

// console.log("Message from outside the if statemetn")


// function sayHello() {
//     if (time==="morning") {
//         console.log("Lights are off")
//     } else if(time ==="early-morning") {
//         console.log("Turn half the lights on")
//     } else {
//         console.log("Lights are on")
//     }
// }

let username = prompt("Enter your name");

function login(u) {
    let loggedIn = false;
    if (loggedIn) {
        console.log("Logged in successfully")
    } else {
        console.log(`${u} is not a verified user` )
    }
}
login();

// parameters or argument
function xPlusTwo(x,y) {
    console.log(2*x+y)
}

xPlusTwo(1, 4)
xPlusTwo(4, 3)