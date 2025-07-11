console.log("---------------WHILE LOOP-------")
var sheepCounted = 0;
// Initialize a variable to keep track of how many sheep have been counted

while (sheepCounted < 10) {
    // Loop runs as long as sheepCounted is less than 10

    console.log("I have counted " + sheepCounted + " sheep!");
    // Print the current number of sheep counted

    sheepCounted++;
    // Increment the count by 1
}

console.log("Zzzzzzzzzzz");
// After counting 10 sheep, print a sleeping sound

console.log("---------------FOR LOOP-------")

// Start a for loop with bangCounted initialized to 15
// The loop will continue as long as bangCounted is greater than 0
// After each iteration, decrease bangCounted by 4
for (var bangCounted = 15; bangCounted > 0; bangCounted -= 4) {
  // Print the current value of bangCounted followed by "bang!"
  console.log("I have counted " + bangCounted + "bang!");
}

// After the loop ends, print a final message
console.log("That was loud");


console.log("---------------FOR LOOP WITH ARRAY-------")

// Create an array called 'fruits' containing four fruit names
var fruits = ["apple", "pineapple", "mango", "Berry"];

// Start a for loop that iterates over each element in the 'fruits' array
// 'i' is the loop counter, starting at 0
// The loop runs as long as 'i' is less than the length of the array
for (var i = 0; i < fruits.length; i++) {
  // Print a message including the current fruit from the array
  console.log("This bowl contains " + fruits[i] + ".");
}


console.log("--------------DO WHILE LOOP-------")

