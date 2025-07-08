var age = 13;                // Declare a variable 'age' and assign it the value 13
var accompanied = false;     // Declare a variable 'accompanied' and assign it the Boolean value false

// Check if the person is under 13 OR (under 13 AND accompanied)
// Since age is 13, (age < 13) is false
// So the entire expression evaluates to false
var allowed = (age < 13) || (age < 13 && accompanied); 

console.log(allowed);        // Output: false
