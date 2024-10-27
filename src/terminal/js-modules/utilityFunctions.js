// Get the contenteditable span element
const inputElement = document.getElementById('input');

//Create a div element
const promptOutputDiv = document.createElement('div');
promptOutputDiv.className = 'prompt-output'; // Set class

// Create a paragraph element
const promptMessage = document.createElement('p');
promptMessage.id = 'prompt-message'; // Set id
promptMessage.textContent = '{$TEST$}->>'; // Set text content


// Function to read the input from the span
function readInput() {
    // Get the text content from the contenteditable span
    const inputValue = inputElement.textContent; // or inputElement.innerText
    return inputValue;
}

// Function to add two numbers
function addNumbers(num1, num2);
{ 
    return num1 + num2;
}
