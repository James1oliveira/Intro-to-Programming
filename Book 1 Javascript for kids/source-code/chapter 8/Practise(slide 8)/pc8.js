// Define a function called 'thirdletter' that takes one parameter: 'name'
var thirdletter = function(name) {
    
    // Check if the name has fewer than 3 characters
    if (name.length < 3) {
        // If it does, return a message indicating the name is too short
        return "Name is too short.";
    }

    // If the name has at least 3 characters, return the third letter (index 2)
    return "The third letter of your name is " + name[2] + ".";
};

// Call the function with the name "James" and print the result to the console
console.log(thirdletter("James"));

