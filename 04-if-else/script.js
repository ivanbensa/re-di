//  Task 1

let isStrawberryAvailable = false;
let isMangoAvailable = false;
let isHazelnutAvailable = true;

if(isStrawberryAvailable) {
   console.log("Buy Strawberry");
} else if(isMangoAvailable) {
    console.log("Buy Mango");
} else if(isHazelnutAvailable) {
    console.log("Buy Hazelnut");
} else {
    console.log("Buy Chocolate");
}

//  Task 2

let budget = 10;

let milkPrice = 2;
let cheesePrice = 4;
let breadPrice = 2;
let butterPrice = 1;

let boughtBread = false;

if (budget >= milkPrice) {
    budget -= milkPrice;
    console.log("Bought milk");
}

if (budget >= cheesePrice) {
    budget -= cheesePrice;
    console.log("Bought cheese");
}

if (budget >= breadPrice) {
    budget -= breadPrice;
    boughtBread = true;
    console.log("Bought bread");
}

if (budget >= butterPrice && boughtBread) {
    budget -= butterPrice;
    console.log("Bought butter");
}

console.log("Budget left: " + budget);

//  Task 3

let temperature = 25;

if(temperature > 30) {
    console.log("Too hot");
} else if(temperature > 20) {
    console.log("Warm");
} else if(temperature > 5) {
    console.log("Perfect");
} else {
    console.log("Cold");
}