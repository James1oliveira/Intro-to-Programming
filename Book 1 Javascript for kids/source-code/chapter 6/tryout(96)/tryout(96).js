// Print section header for Part A
console.log("-----Part A-----");

// Declare a variable 'name'
var name = "Lethabo";

// Check if the name is exactly "Bob"
if (name === "Bob") {
    // If the name is "Bob", greet as yourself
    console.log("Hello me!!!");
} else {
    // If the name is not "Bob", greet as a stranger
    console.log("Hello stranger...");
}

console.log("-----Part B-----");

// Declare variables for mom and father
var mom = "Maria";
var father = "Bob";

// Check if 'mom' has a value (truthy)
if (mom) {
    console.log("Hello " + mom); // Greet mom
} else if (father) {
    console.log("Hello " + father); // Greet father (fixed from 'bob' to 'father')
} else {
    console.log("Hello Stranger"); // If neither has a value, greet as stranger
}