
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let result;
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        result = multiply(num1, num2);

        // Display the result
        displayResult(result,'multiplication');

        // Perform the operation
        result = add(num1, num2);

        // Display the result
        displayResult(result, 'addition');

        // Perform the operation
        result = division(num1, num2);

        // Display the result
        displayResult(result, 'division');
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Add the numbers
    return a + b;
}

function division(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Divide the numbers
    return a / b;
}

function displayResult(result, operation) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result for ${operation} is: ${result}`;
}
