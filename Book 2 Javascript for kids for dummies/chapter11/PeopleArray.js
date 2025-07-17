// Log the start of the People array section
console.log("-------People Array-------");

// Declare and initialize an array of people
var people = ["Teddy", "Cathy", "Bobby"];
console.log("The people's Array:", people);

// Change the first element in the array from "Teddy" to "Georgie"
people[0] = "Georgie";
console.log("After changing the value:", people);

// Convert the array to a string and display it in the HTML element with id "peopleIKnow"
// Using valueOf(), which behaves like toString() in this context
document.getElementById("peopleIKnow").innerHTML = people.valueOf();


// Log the start of the Other People array section
console.log("-------Other People Array-------");

// Declare another array called otherpeople
var otherpeople = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Tony"];
console.log("The Other people's Array:", otherpeople);


// Log the start of the My People array section
console.log("-------My People Array-------");

// Concatenate (combine) the people and otherPeople arrays into a new array
var myPeople = people.concat(otherPeople);  // NOTE: This will throw an error because 'otherPeople' is not defined; should be 'otherpeople'
console.log("My new combined array:", myPeople);


// Series of array manipulations (note: only the result of the last one remains in `people`)

// Find the index of "Eddie" in the array (returns -1 if not found)
people = people.indexOf("Eddie");

// Join the array elements with " # " separator (converts array to a string)
people = people.join(" # ");

// Get the last index of "Bobby" in the array
people = people.lastIndexOf("Bobby");

// Remove the last element from the array
people = people.pop();

// Add "Teddy" to the end of the array
people = people.push("Teddy");

// Reverse the order of elements in the array
people = people.reverse();

// Remove the first element in the array
people.shift();

// Add "Teddy" to the beginning of the array
people.unshift("Teddy");

// Slice the array to only include the first 3 elements (non-destructive)
people = people.slice(0, 3);

// Sort the array alphabetically
people = people.sort();

// Insert "Cathy" at index 1 without removing any elements
people.splice(1, 0, "Cathy");
