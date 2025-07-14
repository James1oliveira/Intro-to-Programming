// Creating variables and Assigning Values
var book = 5; // Declare a variable named 'book' and assign it the value 5
console.log("book value:" , book); // Log the value of 'book' to the console

var myFirstName = "Cursh"; // Declare a variable named 'myFirstName' and assign it a string value
console.log("my name:" , myFirstName); // Log the value of 'myFirstName' to the console

// Demonstrating string properties and methods
console.log("----------String properties and methods-------");
console.log("Length of the string:", "I am a string.".length); // Get and log the length of the string
console.log("Index of the string:", "my first javascript string.".indexOf("first")); // Find and log the position of "first" in the string

// Boolean expressions (true/false comparisons)
console.log("--------Boolean expressions-----------");
console.log("Is this condition true or false:", 1 < 10); // true
console.log("Is this condition true or false:", false === false); // true
console.log("Is this condition true or false:", 40 >= 40); // true

// Alert messages with string, number, and math expressions
alert("Good job!"); // Show an alert with a string message
alert(300); // Show an alert with a number
alert(37 * 37); // Show an alert with the result of a math operation (1369)

// Alert using a variable
var myNameIs = "Lee"; // Declare a variable with a name
alert(myNameIs); // Show an alert displaying the variable value

// Alert combining text and variables
var firstName = "Cee"; // Declare a variable for the first name
var yourScore = 30; // Declare a variable for the score
alert("Hi, " + firstName + ". Your current score is: " + yourScore); // Show alert combining text and variable values

// Using document.write() to write directly to the HTML document
document.write("------Using document.write Part 1 --------<br>");
document.write("Hi, Mom!<br>"); // Write a line to the document
document.write("How are you?<br>"); // Write a line to the document
document.write("I'm great! Thanks!<br>"); // Write a line to the document
document.write("------End of Part 1 --------<br><br>");

// Custom letter example combining input (variables) and output
var toName = "Lee"; // Variable for recipient's name
var fromName = "The Grammy Awards"; // Variable for sender's name
var letterBody = 'The committee said, "We can\'t believe how good your song is!"'; // Message body with escaped apostrophe

// Writing the custom letter using document.write()
document.write("------Using document.write Part 2 --------<br>");
document.write("Dear " + toName + ",<br><br>"); // Greeting line
document.write(letterBody + "<br><br>"); // Letter body
document.write("Sincerely,<br>"); // Closing
document.write(fromName + "<br>"); // Sender's name
document.write("------End of Part 2 --------");

