// When the "Operate!" button is clicked, run the calculateIt function
document.getElementById("submit").addEventListener("click", calculateIt);

function calculateIt() {

    // Declare variables to hold the selected operator and the final result
    var myOperator;
    var returnValue;

    // Get the values entered by the user for operand1 and operand2
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;

    // Get the selected data types for each operand
    var select1 = document.getElementById("operand1-type");
    var select2 = document.getElementById("operand2-type");

    var operand1type = select1.value;
    var operand2type = select2.value;

    // Get all radio buttons with the name "operator"
    var radios = document.getElementsByName('operator');

    // Convert operand1 to the selected type
    switch (operand1type) {
        case "string":
            operand1 = String(operand1); // Ensure it's treated as a string
            break;
        case "number":
            operand1 = Number(operand1); // Convert to number
            break;
    }

    // Convert operand2 to the selected type
    switch (operand2type) {
        case "string":
            operand2 = String(operand2); // Ensure it's treated as a string
            break;
        case "number":
            operand2 = Number(operand2); // Convert to number
            break;
    }

    // Loop through the operator radio buttons to find the selected operator
    for (var i = 0, length = radios.length; i < length; i++) {

        if (radios[i].checked) {
            myOperator = radios[i].value;

            // Perform different operations based on the selected operator
            switch (radios[i].value) {
                case "+":
                    returnValue = operand1 + operand2;
                    break;
                case "-":
                    returnValue = operand1 - operand2;
                    break;
                case "*":
                    returnValue = operand1 * operand2;
                    break;
                case "/":
                    returnValue = operand1 / operand2; // Fixed: should be division, not multiplication
                    break;
                case "%":
                    returnValue = operand1 % operand2;
                    break;
                case "concat":
                    returnValue = operand1 + operand2; // Concatenate as strings
                    myOperator = "+"; // Display "+" as the symbol used
                    break;
                case "==":
                    returnValue = operand1 == operand2;
                    break;
                case "===":
                    returnValue = operand1 === operand2;
                    break;
                case "!=":
                    returnValue = operand1 != operand2;
                    break;
                case "!==":
                    returnValue = operand1 !== operand2;
                    break;
                case ">":
                    returnValue = operand1 > operand2;
                    break;
                case ">=":
                    returnValue = operand1 >= operand2;
                    break;
                case "<":
                    returnValue = operand1 < operand2;
                    break;
                case "<=":
                    returnValue = operand1 <= operand2;
                    break;
            }

            break; // Exit loop once the selected operator is found and operation is done
        }
    }

    // Display the full operation as a string (e.g., "1 + 2" or '"hello" + "world"')
    if (typeof(operand1) === "string") {
        operand1 = '"' + operand1 + '"'; // Wrap in quotes if it's a string
    }
    if (typeof(operand2) === "string") {
        operand2 = '"' + operand2 + '"'; // Wrap in quotes if it's a string
    }
    document.getElementById("final-operation").innerHTML = operand1 + myOperator + operand2;

    // Display the result of the operation
    document.getElementById("result").innerHTML = returnValue;
};
