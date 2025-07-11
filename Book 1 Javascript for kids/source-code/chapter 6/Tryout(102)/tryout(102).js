// Print a header to indicate the start of Section A
console.log("------------------A-------------------")

// Use a for loop to multiply x by 3 each time, starting from 3
// The loop continues as long as x is less than 10,000
for (var x = 3; x < 10000; x = x * 3) {
  // Print the current value of x
  console.log(x);
}

// Print a header to indicate the start of Section B
console.log("------------------B-------------------")

// Initialize a variable 'number' with the value 3
let number = 3;

// Use a do...while loop to multiply number by 3 each time
// This loop runs at least once before checking the condition
do {
  // Print the current value of number
  console.log(number);

  // Multiply number by 3 and update its value
  number *= 3;

} while (number < 10000); // Continue the loop while number is less than 10,000
