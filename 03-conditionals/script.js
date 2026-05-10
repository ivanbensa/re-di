//  Task 1
/*
let age = 18;

if(age >= 18) {
    console.log("You can enter");
}
*/
//  Task 2

let temperature = 21;

if(temperature > 20) {
    console.log("It's warm outside");
}

//  Task 3

let hasTicket = true;
let age = 18;

if(age >= 18 && hasTicket) {
    console.log("You can enter the cinema");
}

//  Task 4

let color = "red";

if(color === "red" || color === "orange") {
    console.log("Warm color");
}

//  Task 5

let isDaytime = false;

if (!isDaytime) {
    console.log("It's nighttime");
}

// Task 6 Bonus

let x = 5;
let y = 6;
let sum = -1;

if(x + y >= 10) {
    sum = x + y
}

document.body.textContent = sum;
