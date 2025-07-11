console.log("------------------- if statement --------------------")
var name = "Bob"; 
// Declare a variable named 'name' and assign it the value "Nicholas"

console.log("Hello " + name); 
// Print a greeting message that includes the value of the 'name' variable

if (name.length > 7) {
  // Check if the length of the name is greater than 7 characters

  console.log("Wow, you have a REALLY long name!");
  // If the condition is true, print this message
}

console.log("------------------- else statement --------------------")

var name = "Sam"; 
// Declare a variable named 'name' and assign it the value "Sam"

console.log("Hello " + name); 
// Output a greeting message that includes the name

if (name.length > 12) {
  // Check if the name is longer than 12 characters

  console.log("Wow, you have a REALLY short name!");
  // This message is incorrectly labeled — it's triggered for long names.
  // Consider changing the message to reflect long names instead.

} else {
  // If the name is 12 characters or fewer

  console.log("Your name isn't very long.");
  // Print a message indicating the name is not very long
}

console.log("-------------------Else-if statement --------------------")

// Declare a variable for lemon chicken and set it to false
var lemonChicken = false;

// Declare a variable for beef with black bean and set it to true
var beefWithBlackBean = false;

// Declare a variable for sweet and sour pork and set it to true
var sweetAndSourPork = false;

// Check which dish is available/preferred
if (lemonChicken) {
    // If lemon chicken is true, choose lemon chicken
    console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
    // If lemon chicken is not available but beef is, choose beef
    console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
    // If neither lemon chicken nor beef is available but pork is, choose pork
    console.log("OK, I'll have the pork.");
} else {
    // If none of the dishes are available, default to rice
    console.log("Well, I guess I'll have rice then.");
}